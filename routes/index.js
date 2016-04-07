var express = require('express');
var router = express.Router();

//Inclusión de los controladores
var uploadSiaData = require('../controllers/upload_sia_data');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('sia_processors/process_xls_file', function(req, res, next) {
    res.render('/sia_processors/process_xls_file');
});

module.exports = router;