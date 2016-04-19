/**
 * Created by Administrador on 06/04/2016.
 */

//var fs = require('fs');

exports.indexRedirect = function (req, res) {
    res.redirect('ed_integrator/index');
};

exports.processXlsFile = function (req, res, next) {

    console.log(req.files.csvFile);
    
};