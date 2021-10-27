const {Pokemon} = require('../database/models');
const deleteDB = () => {
  Pokemon.sync({force:true});
}

deleteDB();