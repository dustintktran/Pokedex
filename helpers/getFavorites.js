const models = require('../database/models');
const Sequelize = require('sequelize');
const sequelize = require('../database');
const Op = Sequelize.Op;

const getFavorites = async (team_id) => {
/* I left off here. I need to figure out how to get this promise to send down the chain. 
check register to see if the promise is even going throug
*/
console.log('lalala', team_id);
return await findPoke(team_id);
}

const findPoke = async (team_id) => {
  return await models.PokemonTeam.findAll({
    attributes:['pokemon_id'],
    where: { team_id: parseInt(team_id)}
  }).then(items => {
    return findPoke2(items);
  })
}

const findPoke2 = async (items) => {
  let ids = [];
  items.map(item => {
    ids.push({id: item.pokemon_id});
  })
  return await models.Pokemon.findAll({
    where: {
      [Op.or]: ids
    }
  })
}


  // return await models.Pokemon.findAll().then((item) => {
  //   return item;
  // })


module.exports = getFavorites;



//   await models.PokemonTeam.findAll({
//     attributes: ['pokemon_id'],
//     where: {
//       team_id: team_id
//     }
//   }).then(item => {
//     let ids = [];
//     item.map(entry => ids.push({id: entry.pokemon_id}));
//     models.Pokemon.findAll({
//       where: {
//         [Op.or]: ids
//       }
//     }).then(output => {
//       console.log('OUTPUT', output);
//       return output;
//     })
//   })
// }