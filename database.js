// =====================================================================================================
//    ____        _        _
//   |  _ \  __ _| |_ __ _| |__   __ _ ___  ___
//   | | | |/ _` | __/ _` | '_ \ / _` / __|/ _ \
//   | |_| | (_| | || (_| | |_) | (_| \__ \  __/
//   |____/ \__,_|\__\__,_|_.__/ \__,_|___/\___|
//
// =====================================================================================================

var config = require('./src/app/dbconfig');
// Auth
var firebase = require('firebase/app');
require('firebase/auth');
firebase.initializeApp(config.firebase);
// Firestore
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert(require(config.serviceAccountKeyPath)),
  databaseURL: config.firebase.databaseURL
});
var db = admin.firestore();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
  app.post('/server/newCounter', newCounter);
  app.post('/server/count', count);
  app.get('/server/getCounters', getCounters);
};

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
};

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
};

/**
 * This method is called when a user is trying to create a new counter.
 *
 * @param {Object} req Request
 * @param {Object} res Response
 */
var newCounter = function(req, res) {
  db.collection('counters')
    .add({
      name: req.body.name,
      counts: []
    })
    .then(ref => {
      console.log('Added document with ID: ', ref.id);
    })
    .catch(function(err) {
      console.log(err.message);
    });
};

/**
 * This method is called when a user is trying to add a count to a counter.
 *
 * @param {Object} req Request
 * @param {Object} res Response
 */
var count = function(req, res) {
  db.collection('counters')
    .doc(req.body.counterId)
    .update({
      counts: admin.firestore.FieldValue.arrayUnion(
        new Date()
      )
    })
    .then(function(){
      res.json({
        success: true
      });
    })
    .catch(function(err) {
      res.json({
        success: false,
        error: err
      });
    });
};

/**
 * This method is called when a user is trying to access the list of counters.
 *
 * @param {Object} req Request
 * @param {Object} res Response
 */
var getCounters = function(req, res) {
  db.collection('counters')
  .get()
  .then(function(querySnapshot){
    const documents = [];
    querySnapshot.docs.forEach(doc => {
      const document = {
        id: doc.id,
        data: doc.data()
      };
      documents.push(document);
    });
    res.json({
      documents: documents
    });
  })
};

module.exports = accessDatabase;
