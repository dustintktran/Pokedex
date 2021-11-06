
const SHA256 = require('./SHA256.js');

const matchPass = (salt, pass) => {
  let hashed = SHA256(salt+pass);
  console.log(hashed, salt);
  return hashed;
}

module.exports = matchPass;