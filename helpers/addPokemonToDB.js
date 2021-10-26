const models = require('../database/models');

const addPokemonToDatabase = ({id, name, types, stats, sprites}) => {
  models.Pokemon.count({where: {'id':id}}).then(c => {
    if(!c) {
      models.Pokemon.create({id, name, types, stats, sprites});
    }
  })
}

module.exports = addPokemonToDatabase;