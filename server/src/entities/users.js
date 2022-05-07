const response = require("express");
const resolve  = require("path");

class Users {
  constructor(db) {
    this.db = db;
    // suite plus tard avec la BD
  }

  create(name,login,password) {
    return new Promise((resolve, reject) => {
      // let userid = 1; // À remplacer par une requête bd
      const user = {
        name:name,
        login:login,
        password:password,
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

      this.db.users.findOne({_id: userid}, function (err,doc) {
        if(doc) {
          
            resolve(doc);

        } else {
          
            reject();
        }   
      })
    });
  }

  
  async exists(login) {
    console.log("---4-bis-3");

    return new Promise((resolve, reject) => {
      console.log("---4-bis-4");

      this.db.users.findOne({login: login}, function (err,doc){
        console.log("---4-bis-5");

        if (doc){
          
          resolve(doc._id);
          
        }
        else{
          
          resolve();
          
        }
        })
        console.log("---4-bis-6");

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

}

exports.default = Users;

// class Users {
//   constructor(db) {
//     this.db = db
//     // suite plus tard avec la BD
//   }

//   create(login, password, lastname, firstname) {
//     return new Promise((resolve, reject) => {
//       let userid = 1; // À remplacer par une requête bd
//       if(false) {
//         //erreur
//         reject();
//       } else {
//         resolve(userid);
//       }
//     });
//   }

//   get(userid) {
//     return new Promise((resolve, reject) => {
//       const user = {
//          login: "pikachu",
//          password: "1234",
//          lastname: "chu",
//          firstname: "pika"
//       }; // À remplacer par une requête bd

//       if(false) {
//         //erreur
//         reject();
//       } else {
//         if(userid == 1) {
//           resolve(user);
//         } else {
//           resolve(null);
//         }
//       }
//     });
//   }

//   async exists(login) {
//     return new Promise((resolve, reject) => {
//       if(false) {
//         //erreur
//         reject();
//       } else {
//         resolve(true);
//       }
//     });
//   }

//   checkpassword(login, password) {
//     return new Promise((resolve, reject) => {
//       let userid = 1; // À remplacer par une requête bd
//       if(false) {
//         //erreur
//         reject();
//       } else {
//         resolve(userid);
//       }
//     });
//   }

// }

// exports.default = Users;

