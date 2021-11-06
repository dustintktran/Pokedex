const hashPass = require('./hashPass.js');
const models = require('../database/models');

const register = async (username, password) => {
  return await models.Profile.count({where:{'username':username}}).then(c => {
    if(c == 0 && password.length > 5) {
      let hasher = hashPass(password);
      let hashedPassword = hasher[0];
      let salt = hasher[1];
      models.Profile.create({username:username, password:hashedPassword, salt:salt})
      return username;
    } else {
      return null;
    }
  })
  //check db and see if username is unique
  
  //if user is unique and passes criteria, hash the password and add user+pass+salt triplet to DB
  //return username
  //else (maybe a switch for why the registration failed.)
  //return null;

}

module.exports = register;