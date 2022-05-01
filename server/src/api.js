const express = require("express");
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
            if (await users.create(name,login, password)) {
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

    router.put("/user", (req, res) => {
        const { login, password, lastname, firstname } = req.body;
        if (!login || !password || !lastname || !firstname) {
            res.status(400).send("Missing fields");
        } else {
            users.create(login, password, lastname, firstname)
                .then((user_id) => res.status(201).send({ id: user_id }))
                .catch((err) => res.status(500).send(err));
        }
    });

// ----------------------------------------------------------------------------

const posts = new Posts.default(db);

    router    
        .route("/post")
        .post(async (req, res) => {
        try {
            const {contenttext } = req.body;
            if (await posts.create(req.session.userid,contenttext)) {
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
            .route("/post/:post_id")
            .get(async (req, res) => {
            try {
                const post = await posts.get(req.params.post_id);
                if (!post)
                    res.sendStatus(404);
                else
                    res.send(post);
            }
            catch (e) {
                res.status(500).send(e);
            }
        })
            .delete((req, res, next) => res.send(`delete post ${req.params.post_id}`))
        

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
