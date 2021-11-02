const Sequelize = require('sequelize');
const sequelize = require('./index.js');
const Model = Sequelize.Model;

class Pokemon extends Model {}
class Account extends Model {}

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

Account.init({
  id:{
    type:Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING
})


Pokemon.sync();

module.exports = {Pokemon};