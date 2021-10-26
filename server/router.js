const router = require('express').Router();
const controller = require('./controller')

router.route('/find').get(controller.test);
router.route('/add').post(controller.addPokemon);
router.route('/getFav').get(controller.getFavorites);

module.exports = router;