const addPokemon = require('../helpers/addPokemonToDB.js');
const getFavorites = require('../helpers/getFavorites.js');
const register = require('../helpers/register.js');
const login = require('../helpers/login.js');
module.exports = {
  test: ('/', (req,res) => {
    res.send({});
  }),
  login: ('/', (req, res) => {
    login(req.body.username, req.body.password).then(response => {
      console.log(response);
      if(response == true) {
        res.send(req.body.username);
      } else {
        res.send(null);
      }
    })
  }),
  register: ('/', (req, res) =>  {
    register(req.body.username, req.body.password).then(response => {
      if(response == null) { //maybe change this to a switch with why the registration failed
        res.send('error');
      } else {
        res.send('successfully created account for ' + response);
      }
    })
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