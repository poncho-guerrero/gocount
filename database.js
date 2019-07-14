// =====================================================================================================
//    ____        _        _                    
//   |  _ \  __ _| |_ __ _| |__   __ _ ___  ___ 
//   | | | |/ _` | __/ _` | '_ \ / _` / __|/ _ \
//   | |_| | (_| | || (_| | |_) | (_| \__ \  __/
//   |____/ \__,_|\__\__,_|_.__/ \__,_|___/\___|
//
// =====================================================================================================
var firebase = require("firebase/app");
require("firebase/auth");
firebase.initializeApp(require('./src/app/dbconfig'));

/**
 * @namespace
 */
var Database;
/** 
 * `~/database.js` Manages all access to the Firebase database.
 * 
 * @param {object} app - Express app object.
 * 
 * @memberof Database
 */
var accessDatabase = function(app) {
  app.post('/server/signin', signin);
  app.post('/server/signout', signout);
}

/**
 * This method is called when a user is trying to be authenticated.
 * 
 * @param {Object} req Request
 * @param {Object} res Response
 */
var signin = function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(){
      res.json({ 
        success: true
      });
    })
    .catch(function(error){
      res.json({ 
        success: false,
        message: error.message
      });
    })
}

/**
 * This method is called when a user is trying to finish the session.
 * 
 * @param {Object} req Request
 * @param {Object} res Response
 */
var signout = function(req, res) {
  firebase
    .auth()
    .signOut()
    .then(function() {
      res.json({ 
        success: true
      });
    })
    .catch(function(error) {
      res.json({ 
        success: false,
        message: error.message
      });
    });
}

module.exports = accessDatabase;

