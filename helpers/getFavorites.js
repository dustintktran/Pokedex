const models = require('../database/models');

const getFavorites = () => {
  models.Pokemon.findAll().then((item) => {
    console.log(item);
  })
}

module.exports = getFavorites;