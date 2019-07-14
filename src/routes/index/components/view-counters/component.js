// =====================================================================================================
//     ____                  _                
//    / ___|___  _   _ _ __ | |_ ___ _ __ ___ 
//   | |   / _ \| | | | '_ \| __/ _ \ '__/ __|
//   | |__| (_) | |_| | | | | ||  __/ |  \__ \
//    \____\___/ \__,_|_| |_|\__\___|_|  |___/
//
// =====================================================================================================
const axios = require('axios');

/**
 * @class
 * 
 * This class contains methods for creating, viewing and interacting with counters.
 * @name Counters
 */
class Counters {
  newCounter() {
    axios
      .post('/server/newCounter', {
        name: 'Example'
      });
  }
}

module.exports = Counters;