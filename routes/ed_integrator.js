/**
 * Created by Administrador on 12/04/2016.
 */

var express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/csv' })

var router = express.Router();

//Inclusión de los controladores
var uploadSiaData = require('../controllers/uploadSiaData_controller');

/* GET home page. */
router.get('/', uploadSiaData.indexRedirect);

router.get('/index', function(req, res) {
    res.render('sia_procesors/index', {
        errors: []
    });
});

router.get('/upload_file', function(req, res) {
    res.render('sia_procesors/process_file', {
        errors: []
    });
});

router.post('/process_file', upload.single('file'), uploadSiaData.processFile);

module.exports = router;