/**
 * Created by Administrador on 12/04/2016.
 */

var express = require('express');
var router = express.Router();

//Inclusión de los controladores
var uploadSiaData = require('../controllers/uploadSiaData_controller');

/* GET home page. */
router.get('/', uploadSiaData.indexRedirect);

router.get('/index', function(req, res) {
    res.render('sia_procesors/index');
});

router.get('/prueba2', function(req, res) {
    res.render('sia_procesors/process_xls_file');
});

module.exports = router;