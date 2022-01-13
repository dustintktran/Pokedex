const models = require('../database/models');
const Sequelize = require('sequelize');
const sequelize = require('../database');
const Op = Sequelize.Op;

const getFavorites = async (team_id) => {

let pokeIds = await models.PokemonTeam.findAll({
  attributes:['pokemon_id'],
  where: { team_id: parseInt(team_id)}
})

let ids = [];

pokeIds.map(entry => {ids.push({id: entry.pokemon_id})});
let pokes = await models.Pokemon.findAll({
  where: {
    [Op.or]: ids
  }
})


return pokes;

}

module.exports = getFavorites;
