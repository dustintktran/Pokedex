const router = require('express').Router();
const controller = require('./controller')

router.route('/find').get(controller.test);
router.route('/add').post(controller.addPokemon);
router.route('/getFav').get(controller.getFavorites);
router.route('/register').post(controller.register);
router.route('/login').post(controller.login);

module.exports = router;