// =====================================================================================================
//    ____  _               ___       
//   / ___|(_) __ _ _ __   |_ _|_ __  
//   \___ \| |/ _` | '_ \   | || '_ \ 
//    ___) | | (_| | | | |  | || | | |
//   |____/|_|\__, |_| |_| |___|_| |_|
//            |___/                   
// =====================================================================================================
const axios = require('axios');

/**
 * @class
 * 
 * Contains the modal sign in form.
 * @name SignIn
 * 
 * @requires NPM:axios
 */
class SignIn {
  /**
   * Method that is called when the user attempts to sign in.
   * 
   * @memberof SignIn
   */
  post() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    axios
      .post('/server/signin', {
        email: email,
        password: password
      })
      .then(function(res){
        location.reload();
      });
  }
}

module.exports = SignIn;