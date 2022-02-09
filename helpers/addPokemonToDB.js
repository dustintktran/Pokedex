const models = require('../database/models');

const addPokemonToDatabase = async ({id, name, types, stats, sprites}, team_id) => {

  const pokemon = await models.Pokemon.findByPk(id);
  if(!pokemon) {
    const team = await models.Team.findOne({where: { 'id': team_id }});
    const newPokemon = await models.Pokemon.create({id, name, types, stats, sprites});
    await team.addPokemons(newPokemon);
  } else {
    console.log('pokemon already in DB');
    const team = await models.Team.findOne({where: { 'id': team_id }})
    await team.addPokemons(pokemon);
  }
}
module.exports = addPokemonToDatabase;