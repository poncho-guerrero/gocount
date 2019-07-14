// =====================================================================================================
//    ____             _            
//   |  _ \ ___  _   _| |_ ___  ___ 
//   | |_) / _ \| | | | __/ _ \/ __|
//   |  _ < (_) | |_| | ||  __/\__ \
//   |_| \_\___/ \__,_|\__\___||___/
//
// =====================================================================================================
/**
 * @namespace
 */
var Routes;
/** 
 * `~/routes.js` Manages all HTML and JSON API end points.
 * 
 * @param {object} app - Express app object.
 * 
 * @memberof Routes
 */
var defineRoutes = function(app) {
  app.get('/', require('./src/routes/index'));
}

module.exports = defineRoutes;