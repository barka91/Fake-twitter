const path = require('path');
const api = require('./api.js');
const cors = require('cors');
const fileUpload = require('express-fileupload')

// Détermine le répertoire de base
const basedir = path.normalize(path.dirname(__dirname));
console.debug(`Base directory: ${basedir}`);

express = require('express');
const app = express()
api_1 = require("./api.js");
const session = require("express-session");

var Datastore = require('nedb');
const sqlite3 = require('sqlite3');
db = {};
db.users = new Datastore('../data/users.db');
db.users.loadDatabase();
db.posts = new Datastore('../data/posts.db');
db.posts.loadDatabase();

app.use(fileUpload());

// DB
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "../data/img.db"
    },
    useNullAsDefault: true
});


app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'   // IP sur laquelle tourne votre client
 }));

app.use(session({
    secret: "technoweb rocks",
    resave: true,
    saveUninitialized: true
}));

app.use('/api', api.default(db));

// Démarre le serveur
app.on('close', () => {
});
exports.default = app;

