const models = require('../database/models');

const getFavorites = async () => {
  return await models.Pokemon.findAll().then((item) => {
    return item;
  })
}

module.exports = getFavorites;