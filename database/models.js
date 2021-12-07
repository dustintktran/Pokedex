const Sequelize = require('sequelize');
const sequelize = require('./index.js');
const Model = Sequelize.Model;

class Pokemon extends Model {}
class Profile extends Model {}
class Team extends Model {}

Team.init({
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Team',
  freezeTableName: true
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
  modelName: 'Pokemon',
  freezeTableName: true
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
  modelName: 'Profile',
  freezeTableName: true
})

Pokemon.sync();
Profile.sync();
Team.sync();

// Pokemon.sync({force: true});
// Profile.sync({force: true});
// Team.sync({force: true});

Team.belongsTo(Profile);
Team.hasMany(Pokemon);
// Pokemon.belongsToMany(Team, {through: 'TeamPokemon'});

module.exports = {Pokemon, Profile};

//{force: true}