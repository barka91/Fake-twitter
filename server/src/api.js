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
        try {
            const { login, password } = req.body;
            // Erreur sur la requête HTTP
            if (!login || !password) {
                res.status(400).json({
                    status: 400,
                    "message": "Requête invalide : login et password nécessaires",
                });
                return;
            }
            if(! await users.exists(login)) {
                res.status(401).json({
                    status: 401,
                    message: "Utilisateur inconnu"
                });
                return;
            }
            let userid = await users.checkpassword(login, password);
            if (userid) {
                // Avec middleware express-session
                req.session.regenerate(function (err) {
                    if (err) {
                        res.status(500).json({
                            status: 500,
                            message: "Erreur interne",
                            "lop":userid
                        });
                    }
                    else{
                        // C'est bon, nouvelle session créée
                        req.session.userid = userid;
                        res.status(200).json({
                            status: 200,
                            message: "Login et mot de passe acceptées",
                            "parpitie":req.session.userid
                            
                        });
                    } 
                });
                return;
            }
            // Faux login : destruction de la session et erreur
            req.session.destroy((err) => { });
            res.status(403).json({
                status: 403,
                message: "login et/ou le mot de passe invalide(s)"
            });
            return;
        }
        catch (e) {
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

    router.post('/user/pp/upload', async (req, res) => {
        const {name, data} = req.files.file;
        if (name && data) {
            const p=await knex.insert({name: name, img: data}).into('pp');
            const q= await users.addPP(req.session.userid,p[0])
            res.status(200).json({
                status: 200,
                id: p[0],
            })
        } else {
            res.sendStatus(400);
        }
    })

    router.post('/user/ban/upload', async (req, res) => {
        const {name, data} = req.files.file;
        if (name && data) {
            const p=await knex.insert({name: name, img: data}).into('ban');
            const q= await users.addBan(req.session.userid,p[0])
            res.status(200).json({
                status: 200,
                id: p[0],
            })
        } else {
            res.sendStatus(400);
        }
    })

    router
        // *** GET ***
        .route("/user")
        .get(async (req, res) => {
        try {
            const user = await users.get(req.session.userid);
            
            const ppid = user.ppid;
            const banid = user.banid;
            const image = await knex('pp').where({id:ppid}).first();      
            const banniere = await knex('ban').where({id:banid}).first();
            if (!user)
                res.sendStatus(404);
            else
                res.send({user,image,banniere});
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
    .route("/user/abonnement/")
    .get(async (req, res) => {
    try {
        
        const abo = await users.getabo(req.session.userid);
        if (!abo)
            res.sendStatus(404);
        else
            res.send(abo);
    }
    catch (e) {
        res.status(500).send(e);
    }
});

    router
    .route("/user/follow/:userid")
    .get(async (req, res) => {
    try {
        const a = await users.addAbonnement(req.session.userid,req.params.userid);
        const b = await users.addAbonne(req.params.userid,req.session.userid);

    
        res.sendStatus(200);
    }
    catch (e) {
        res.status(500).send(e);
    }
    });

    router
    .route("/user/unfollow/:userid")
    .get(async (req, res) => {
    try {
        const a = await users.supAbonnement(req.session.userid,req.params.userid);
        const b = await users.supAbonne(req.params.userid,req.session.userid);


    
        res.sendStatus(200);
    }
    catch (e) {
        res.status(500).send(e);
    }
    });

    router
            .route("/user/:user_id")
            .get(async (req, res) => {
            try {
                const user = await users.get(req.params.user_id);
                const ppid = user.ppid;
                const banid = user.banid;
                const image = await knex('pp').where({id:ppid}).first();      
                const banniere = await knex('ban').where({id:banid}).first();
            if (!user)
                res.sendStatus(404);
            else
                res.send({user,image,banniere});
            }
            catch (e) {
                res.status(500).send(e);
            }
        })
            .delete((req, res, next) => res.send(`delete user ${req.params.user_id}`));
        
        

        

        
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

 