const Sequelize = require('sequelize');
const sequelize = require('./index.js');
const Model = Sequelize.Model;

class Pokemon extends Model {}
class Profile extends Model {}
class Team extends Model {}

Profile.init({
  // id:{
  //   type: Sequelize.INTEGER,
  //   primaryKey: true,
  //   allowNull: false,
  //   autoIncrement: true
  // },
  username:{
    type:Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: Sequelize.STRING,
  salt: Sequelize.STRING
},{
  sequelize,
  modelName: 'profile'
})

Team.init({
  // id: {
  //   type: Sequelize.DataTypes.INTEGER,
  //   primaryKey: true,
  //   allowNull: false,
  //   autoIncrement: true
  // }
}, {
  sequelize,
  modelName: 'team'
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
  modelName: 'pokemon'
})

Team.belongsTo(Profile, {as: 'team'});
Team.hasMany(Pokemon, {as: 'pokemon'});
Pokemon.belongsToMany(Team, {through: 'team_pokemon'});

Pokemon.sync();
Profile.sync();
Team.sync();

// Pokemon.sync({force: true});
// Profile.sync({force: true});
// Team.sync({force: true});

module.exports = {Pokemon, Profile};

//{force: true}