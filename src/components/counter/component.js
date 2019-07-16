// =====================================================================================================
//     ____                  _            
//    / ___|___  _   _ _ __ | |_ ___ _ __ 
//   | |   / _ \| | | | '_ \| __/ _ \ '__|
//   | |__| (_) | |_| | | | | ||  __/ |   
//    \____\___/ \__,_|_| |_|\__\___|_|   
//
// =====================================================================================================
const axios = require('axios');

/**
 * @class
 * 
 * This class contains the functions and interactions of a single counter.
 * @name Counter
 * 
 * @requires NPM:axios
 */
class Counter {
  count(counterId) {
    axios
      .post('/server/count', {
        counterId: counterId
      })
      .then((res) => {
        if(res.data.success) {
          this.emit('count');
        }
        else {
          console.error(res.data);
        }
      })
      .catch(function(err){
        console.error(err.message);
      });
  }
}

module.exports = Counter;