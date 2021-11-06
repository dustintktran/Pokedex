const matchPass = require('./matchPass.js');
const models = require('../database/models');

const login = async (username, password) => {
  return await models.Profile.findOne({where:{'username':username}}).then(account => {
    if(account) {
      if(account.password == matchPass(account.salt, password)) {
        return true;
      }
    } else {
      return false;
    }
  })
}

module.exports = login;