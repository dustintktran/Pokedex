const Sequelize = require('sequelize');
const sequelize = require('./index.js');
const Model = Sequelize.Model;

class Pokemon extends Model {}

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

Pokemon.sync();

module.exports = {Pokemon};