const matchPass = require('./matchPass.js');
const models = require('../database/models');

const login = async (username, password) => {
  return await models.Profile.findOne({where:{'username':username}}).then(account => {
    if(account) {
      if(account.password == matchPass(account.salt, password)) {
        //console.log('login correct');
        return true;
      }
    } else {
      //console.log('login incorrect');
      return false;
    }
  })
}

module.exports = login;