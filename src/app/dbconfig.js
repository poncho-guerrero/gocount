// =====================================================================================================
//    ____  ____     ____             __ _       
//   |  _ \| __ )   / ___|___  _ __  / _(_) __ _ 
//   | | | |  _ \  | |   / _ \| '_ \| |_| |/ _` |
//   | |_| | |_) | | |__| (_) | | | |  _| | (_| |
//   |____/|____/   \____\___/|_| |_|_| |_|\__, |
//                                         |___/ 
// =====================================================================================================
/**
 * This object must remain hidden from online pulic repositories because it contains the key to controlling the Firebase database. If lost, this keys can be found in the project's Firebase console, inside the general configuration, on the apps menu, and selecting the corresponding app.
 * 
 * @memberof Database
 */
var dbconfig = {
  firebase: {
    apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
    appID: "app-id",
  },
  serviceAccountKeyPath: 'path/to/serviceAccountKey.json'
};

module.exports = dbconfig;