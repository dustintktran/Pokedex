const addPokemon = require('../helpers/addPokemonToDB.js');
const getFavorites = require('../helpers/getFavorites.js');
module.exports = {
  test: ('/', (req,res) => {
    res.send({});
  }),
  addPokemon: ('/', (req, res) => {
    addPokemon(req.body.pokemon);
    res.send({msg:'boo'});
  }),
  getFavorites: ('/', (req, res) => {
    getFavorites();
    res.send('yah')
  })
}