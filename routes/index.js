var express = require('express');
var router = express.Router();

//Inclusión de los controladores
var index = require('../controllers/index_controller');

/* GET home page. */
router.get('/', index.indexRedirect);

module.exports = router;