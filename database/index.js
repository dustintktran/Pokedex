const {PASSWORD,DB_HOST} = require('./variables');
const Sequelize = require('sequelize');


const sequelize = new Sequelize('pokedex', 'postgres', PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection to Postgres has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  
  module.exports = sequelize;