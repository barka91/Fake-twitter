const response = require("express");
const resolve  = require("path");

class Posts {
  constructor(db) {
    this.db = db;
    // suite plus tard avec la BD
  }

  create(userid,content_text,imgid) {
    return new Promise((resolve, reject) => {
      const post = {
        userid:userid,
        content_text:content_text,
        imgid:imgid,
      }

      this.db.posts.insert(post, function (err,newDoc) {
        if(err) {
          reject();
        } else {
          resolve(newDoc._id);
        }
      })
    });
  }

  get(postid) {
    return new Promise((resolve, reject) => {

      this.db.posts.findOne({_id: postid}, function (err,doc) {
        if(doc) {
            resolve(doc);
        } else {
            reject();
        }   
      })
    });
  }

  getall() {
    return new Promise((resolve, reject) => {

      this.db.posts.find({},{userid:0,content_text:0}, function (err,doc) {
        if(doc) {
            resolve(doc);
        } else {
            reject();
        }   
      })
    });
  }

  getuser(userid){
    return new Promise((resolve, reject) => {

        this.db.posts.find({userid: userid},{userid:0,content_text:0}, function (err,doc) {
          if(doc) {
              resolve(doc);
          } else {
              reject();
          }   
        })
      });
  }


}

exports.default = Posts;