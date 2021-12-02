const Sequelize = require('sequelize');
const sequelize = require('./index.js');
const Model = Sequelize.Model;

class Pokemon extends Model {}
class Profile extends Model {}
class MyTeam extends Model {}

MyTeam.init({
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  }
  /*profileId: {

  },
  pokemon: {

  }*/
}, {
  sequelize,
  modelName: 'MyTeam'
})
Pokemon.init({
  id:{
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: Sequelize.STRING,
  types: Sequelize.ARRAY(Sequelize.STRING),
  stats: Sequelize.ARRAY(Sequelize.INTEGER),
  sprites: Sequelize.ARRAY(Sequelize.STRING)
},{
  sequelize,
  modelName: 'Pokemon'
})

Profile.init({
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  username:{
    type:Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: Sequelize.STRING,
  salt: Sequelize.STRING
},{
  sequelize,
  modelName: 'Profile'
})


Pokemon.sync();
Profile.sync();
MyTeam.sync();

module.exports = {Pokemon, Profile};