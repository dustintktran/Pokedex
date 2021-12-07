const hashPass = require('./hashPass.js');
const models = require('../database/models');

const register = async (username, password) => {
  return await models.Profile.count({where:{'username':username}}).then(c => {
    if(c == 0 && password.length > 5) {
      let hasher = hashPass(password);
      let hashedPassword = hasher[0];
      let salt = hasher[1];
      const newTeam = models.Team.create({
        profile: {
          username:username, 
          password:hashedPassword, 
          salt:salt
        }}, {
          include: [{
            association: models.Team.Profile
          }]
        })

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


      // const newProfile = models.Profile.create({username:username, password:hashedPassword, salt:salt, team:{}},
      //   {include: [{ 
      //     association: models.Profile.Team 
      //   }]})