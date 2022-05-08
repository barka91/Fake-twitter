const response = require("express");
const resolve  = require("path");

class Users {
  constructor(db) {
    this.db = db;
    // suite plus tard avec la BD
  }

  create(name,login,password) {
    var planets = ["Mercure", "Vénus", "Terre", "Mars", "Jupiter", "Saturne", "Uranus", "Neptune"]
    const date = new Date;
    return new Promise((resolve, reject) => {
      // let userid = 1; // À remplacer par une requête bd
      const user = {
        name:name,
        login:login,
        password:password,
        description:"Hello world, this is me, life should be fun for everyone ",
        lieu:planets[Math.floor(Math.random() * planets.length)],
        anniversaire: date.toISOString().slice(0, 10),
        ppid:1,
        banid:1,
        abonnements:[],
        abonnes:[]
      }

      this.db.users.insert(user, function (err,newDoc) {
        if(err) {
          reject();
        } else {
          resolve(newDoc._id);
        }
      })
    });
  }

  get(userid) {
    return new Promise((resolve, reject) => {
      // const user = {
      //    login: "pikachu",
      //    password: "1234",
      //    lastname: "chu",
      //    firstname: "pika"
      // }; // À remplacer par une requête bd

      this.db.users.findOne({_id: userid},{password:0}, function (err,doc) {
        if(doc) {
          
            resolve(doc);

        } else {
          
            reject();
        }   
      })
    });
  }



  
  async exists(login) {

    return new Promise((resolve, reject) => {

      this.db.users.findOne({login: login}, function (err,doc){

        if (doc){
          
          resolve(doc._id);
          
        }
        else{
          
          resolve();
          
        }
        })

    });
  }

  checkpassword(login, password) {
    return new Promise((resolve, reject) => {
      this.db.users.findOne({login: login, password:password}, function (err, doc){
        if (doc) {
          resolve(doc._id)
        } 
        else {
          resolve()
        }
      })
    });
  }

  editionprofil(name,login,description,lieu,anniversaire,userid){
    const user = {
      name:name,
      login:login,
      description:description,
      lieu:lieu,
      anniversaire:anniversaire,
    }
    return new Promise((resolve, reject) => {
      this.db.users.update({_id: userid},{$set:user},function (err,numRemplaced){
        if(err)reject(false)
        else resolve(numRemplaced)
      })
    });
  }
  addPP(userid,pp){
    return new Promise((resolve, reject) => {

      this.db.users.update({_id: userid},{$set:{ppid:pp}},function (err,numRemplaced){
        if(err)reject(false)
        else resolve(numRemplaced)
      })
    });
  }

  addBan(userid,b){
    return new Promise((resolve, reject) => {

      this.db.users.update({_id: userid},{$set:{banid:b}},function (err,numRemplaced){
        if(err)reject(false)
        else resolve(numRemplaced)
      })
    });
  }

  addAbonne(userid,a){
    return new Promise((resolve, reject) => {

      this.db.users.update({_id: userid},{$push:{abonnes:a}},{ upsert: true },function (err,numRemplaced){
        if(err)reject(false)
        else resolve(numRemplaced)
      })
    });
  }

  addAbonnement(userid,a){
    return new Promise((resolve, reject) => {

      this.db.users.update({_id: userid},{$push:{abonnements:a}},{ upsert: true },function (err,numRemplaced){
        if(err)reject(false)
        else resolve(numRemplaced)
      })
    });
  }

  supAbonne(userid,a){
    return new Promise((resolve, reject) => {

      this.db.users.update({_id: userid},{$pull:{abonnes:a}},function (err,numRemplaced){
        if(err)reject(false)
        else resolve(numRemplaced)
      })
    });
  }

  supAbonnement(userid,a){
    return new Promise((resolve, reject) => {

      this.db.users.update({_id: userid},{$pull:{abonnements:a}},function (err,numRemplaced){
        if(err)reject(false)
        else resolve(numRemplaced)
      })
    });
  }

  getabo(userid){
    return new Promise((resolve, reject) => {
      this.db.users.findOne({_id: userid},{abonnements:1}, function (err,doc) {
        if(doc) {
          
            resolve(doc);

        } else {
          
            reject();
        }   
      })
      });
  }
}

exports.default = Users;