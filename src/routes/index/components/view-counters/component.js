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
  onCreate() {
    this.state = {
      documents: []
    }
  }

  onMount() {
    this.update();
  }

  newCounter() {
    var name = prompt('Write a name for the counter.');

    if(name) {
      axios
        .post('/server/newCounter', {
          name: name
        })
        .then(() => {
          this.update();
        });
    }
  }

  update() {
    console.log('updated');
    axios.get('/server/getCounters').then(res => {
      this.state.documents = res.data.documents;
    }).catch(function(err){
      console.log(err.message);
    });
  }
}

module.exports = Counters;