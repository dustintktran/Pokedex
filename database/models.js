const Sequelize = require('sequelize');
const sequelize = require('./index.js');
const Model = Sequelize.Model;

class Pokemon extends Model {}
class Profile extends Model {}
class Team extends Model {}

Profile.init({
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
// Profile.Team = Profile.hasOne(Team, {foreignKey: "profile_id"});
Team.Profile = Team.hasOne(Profile, {foreignKey: 'team_id'});
Team.Pokemon = Pokemon.belongsToMany(Team, {through: 'team_pokemon'});
Pokemon.Team = Team.belongsToMany(Pokemon, {through: 'team_pokemon'});

Pokemon.sync();
Profile.sync();
Team.sync();

// Pokemon.sync({force: true});
// Profile.sync({force: true});
// Team.sync({force: true});

module.exports = {Pokemon, Profile, Team};

//{force: true}