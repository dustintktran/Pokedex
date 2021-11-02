//const models = require('../database/models');
const SHA256 = require('./SHA256.js');

const hashPass = (pass) => {

  const makeSalt = () => {
    const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let salt = '';
    for(var i = 0; i < 10; i++) {
      salt += alph[Math.floor(Math.random()*25)];
    }
    return salt;
  }

  let salt = makeSalt();
  let hashed = SHA256(salt+pass);
  console.log(hashed, salt);
  return [hashed, salt];

}

const matchPass = (salt, pass) => {
  let hashed = SHA256(salt+pass);
  console.log(hashed, salt);
  return hashed;
}

// hashPass('password');
// hashPass('password2');

//matchPass('oafqxyudio', 'password');

module.exports = {hashPass, matchPass};