const router = require('express').Router();
const controller = require('./controller')

router.route('/find').get(controller.test)

module.exports = router;