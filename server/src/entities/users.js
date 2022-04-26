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
          console.log("brEXISTlair");
            resolve(doc);

        } else {
          console.log("brEXISTDFDDFF");
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
          console.log("brEXIST");
        }
        else{
          resolve();
          console.log("brEXISTOAS");
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

