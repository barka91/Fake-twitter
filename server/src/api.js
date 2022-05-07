const express = require("express");
const { default: knex, Knex } = require("knex");
const Posts = require("./entities/posts.js");
const Users = require("./entities/users.js");

function init(db) {
    const router = express.Router();
    // On utilise JSON
    router.use(express.json());
    // simple logger for this router's requests
    // all requests to this router will first hit this middleware
    router.use((req, res, next) => {
        console.log('API: method %s, path %s', req.method, req.path);
        console.log('Body', req.body);
        
        next();
    });
    
    const users = new Users.default(db);

    

    // DB
    const knex = require('knex')({
        client: 'sqlite3',
        connection: {
            filename: "../data/img.db"
        },
        useNullAsDefault: true
    });
        

    // *** LOGIN ***
    router.post("/user/login", async (req, res) => {
        console.log("---1");
        try {
            console.log("---2");
            const { login, password } = req.body;
            console.log("---3");
            // Erreur sur la requête HTTP
            if (!login || !password) {
                res.status(400).json({
                    status: 400,
                    "message": "Requête invalide : login et password nécessaires",
                });
                return;
            }
            console.log("---4");
            if(! await users.exists(login)) {
                console.log("---4-bis");
                res.status(401).json({
                    status: 401,
                    message: "Utilisateur inconnu"
                });
                console.log("---4-bis-2");
                return;
            }
            console.log("---5");
            let userid = await users.checkpassword(login, password);
            if (userid) {
                console.log("---6");
                // Avec middleware express-session
                req.session.regenerate(function (err) {
                    console.log("---7");
                    if (err) {
                        console.log("---8");
                        res.status(500).json({
                            status: 500,
                            message: "Erreur interne",
                            "lop":userid
                        });
                    }
                    else{
                        // C'est bon, nouvelle session créée
                        console.log("---9");
                        req.session.userid = userid;
                        res.status(200).json({
                            status: 200,
                            message: "Login et mot de passe acceptées",
                            "parpitie":req.session.userid
                            
                        });
                        console.log("---10");
                    } 
                    console.log("---11");
                });
                console.log("---12");
                return;
            }
            console.log("---13");
            // Faux login : destruction de la session et erreur
            req.session.destroy((err) => { });
            res.status(403).json({
                status: 403,
                message: "login et/ou le mot de passe invalide(s)"
            });
            console.log("---14");
            return;
        }
        catch (e) {
            console.log("---15");
            // Toute autre erreur
            res.status(500).json({
                status: 500,
                message: "erreur interne",
                details: (e || "Erreur inconnue").toString(),
                number: 9
            });
        }
    });
    // *** SIGNUP ***
    router.post("/user/signup", async (req, res) => {
        try {
            const { name,login, password } = req.body;
            if (!login || !password || !name) {
                res.status(400).send("Missing fields");
            }else {
                if (await users.create(name,login, password)) {
                    res.status(200).json({
                        status: 200,
                        message: "Login et mot de passe accepté",
                    });
                };            
            }
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "erreur interne",
                details: (error || "Erreur inconnue").toString(),
                number: 10
            });
        }

    });

    router.post("/user/edit", async (req, res) => {
        try {
            const { name,login, lieu,description,anniversaire } = req.body;
            
            if (await users.editionprofil(name,login,description,lieu,anniversaire,req.session.userid)) {
                res.status(200).json({
                    status: 200,
                    message: "Login et mot de passe accepté",
                });
            };            
            
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "erreur interne",
                details: (error || "Erreur inconnue").toString(),
                number: 10
            });
        }

    });

    router
        // *** GET ***
        .route("/user")
        .get(async (req, res) => {
        try {
            const user = await users.get(req.session.userid);
            if (!user)
                res.sendStatus(404);
            else
                res.send(user);
        }
        catch (e) {
            res.status(500).send(e);
        }
    })
        // *** DELETE ***
        .delete((req, res, next) => res.send(`delete user ${req.session.userid}`));

    // *** LOGOUT ***
    router.get('/logout',(req,res) => {
        req.session.destroy();
        res.sendStatus(200);
    });

    
    router
            .route("/user/:user_id")
            .get(async (req, res) => {
            try {
                const user = await users.get(req.params.user_id);
                if (!user)
                    res.sendStatus(404);
                else
                    res.send(user);
            }
            catch (e) {
                res.status(500).send(e);
            }
        })
            .delete((req, res, next) => res.send(`delete user ${req.params.user_id}`))


// ----------------------------------------------------------------------------

const posts = new Posts.default(db);

    router    
        .route("/post")
        .post(async (req, res) => {
        try {
            const {contenttext, imgid} = req.body;
            if (await posts.create(req.session.userid,contenttext,imgid)) {
                res.status(200).json({
                    status: 200,
                    message: "Post publié avec succès",
                });
            };
        }
        catch (e) {
            res.status(500).send(e);
        }
    })
        .get(async (req, res) => {
            try {
                const user_posts = await posts.getuser(req.session.userid);
                if (!user_posts)
                    res.sendStatus(404);
                else
                    res.send(user_posts);
            }
            catch (e) {
                res.status(500).send(e);
            }
        })

        router    
        .route("/post/all")
        .get(async (req, res) => {
            try {
                const user_posts = await posts.getall();
                if (!user_posts)
                    res.sendStatus(404);
                else
                    res.send(user_posts);
            }
            catch (e) {
                res.status(500).send(e);
            }
        })

        router
            .route("/post/p/:post_id")
            .get(async (req, res) => {
            try {
                const post = await posts.get(req.params.post_id);
                const imgid = post.imgid;
                const image = await knex('img').where({id: imgid}).first();      
                console.log(image)          
                if (!post)
                    res.sendStatus(404);
                else{}
                    res.send({post,image});
            }
            catch (e) {
                res.status(500).send(e);
            }
        });
                
        router
            .route("/post/:userid")
            .get(async (req, res) => {
            try {
                
                const post = await posts.getuser(req.params.userid);
                if (!post)
                    res.sendStatus(404);
                else
                    res.send(post);
            }
            catch (e) {
                res.status(500).send(e);
            }
        });

        router.post('/upload', async (req, res) => {
            console.log(req.files)
            const {name, data} = req.files.file;
            if (name && data) {
                const p=await knex.insert({name: name, img: data}).into('img');
                
                res.status(200).json({
                    status: 200,
                    id: p[0],
                })
            } else {
                res.sendStatus(400);
            }
        })
        

    return router;
}
exports.default = init;

  // router.get("/user",async (req, res) => {
    //     try {
    //         console.log("req.userid: ",req.session.userid)
    //         const user = await users.get(req.session.userid);
    //         if (!user)
    //             res.sendStatus(404);
    //         else
    //             res.send(user);
    //     }
    //     catch (e) {
    //         res.status(500).send(e);
    //     }
    // })



      // router
    //     .route("/user/:user_id(\\d+)")
    //     .get(async (req, res) => {
    //     try {
    //         const user = await users.get(req.params.userid);
    //         if (!user)
    //             res.sendStatus(404);
    //         else
    //             res.send(user);
    //     }
    //     catch (e) {
    //         res.status(500).send(e);
    //     }
    // })
    //     .delete((req, res, next) => res.send(`delete user ${req.params.user_id}`));
