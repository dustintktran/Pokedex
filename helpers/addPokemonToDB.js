const models = require('../database/models');

const addPokemonToDatabase = async ({id, name, types, stats, sprites}) => {
  return await models.Pokemon.count({where: {'id':id}}).then(c => {
    if(!c) {
      models.Pokemon.create({id, name, types, stats, sprites});
    }
  })
}

module.exports = addPokemonToDatabase;