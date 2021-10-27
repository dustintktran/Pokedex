const addPokemon = require('../helpers/addPokemonToDB.js');
const getFavorites = require('../helpers/getFavorites.js');
module.exports = {
  test: ('/', (req,res) => {
    res.send({});
  }),
  addPokemon: ('/', (req, res) => {
    addPokemon(req.body.pokemon).then(item => {
      res.send(req.body.pokemon.name);
    })
  }),
  getFavorites: ('/', (req, res) => {
    getFavorites().then((arr) => {
      res.send(arr);
    })
  })
}