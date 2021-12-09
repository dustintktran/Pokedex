const models = require('../database/models');

const addPokemonToDatabase = async ({id, name, types, stats, sprites}, team_id) => {
  return await models.Pokemon.findByPk(id).then(item => {
    if(!item) {
      models.Team.findOne({where: { 'id': team_id }}).then((team) => {
        models.Pokemon.create({id, name, types, stats, sprites}).then((pokemon) => {
          team.addPokemons(pokemon);
        })
      })
    } else {
      console.log('pokemon already in DB');
      models.Team.findOne({where: { 'id': team_id }}).then((team) => {
        team.addPokemons(item);
      })
    }
  })
}

module.exports = addPokemonToDatabase;