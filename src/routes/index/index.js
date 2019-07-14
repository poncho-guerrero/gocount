// =====================================================================================================
//    ___           _           
//   |_ _|_ __   __| | _____  __
//    | || '_ \ / _` |/ _ \ \/ /
//    | || | | | (_| |  __/>  < 
//   |___|_| |_|\__,_|\___/_/\_\
//
// =====================================================================================================
var template = require('./template.marko');
var firebase = require('firebase');

/** 
 * Renders `~/src/routes/index/template.marko` view when the url `~/` is requested.
 * @memberof Routes
 */
var renderIndex = function(req, res) {
  template.render({
    session: (firebase.auth().currentUser ? true : false)
  }, res);
}

module.exports = renderIndex;