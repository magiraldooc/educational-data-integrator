/**
 * Created by Administrador on 06/04/2016.
 */

var fs = require('fs');
var csv = require("fast-csv");
var nodeXlsx = require('node-xlsx');

exports.indexRedirect = function (req, res) {
    res.redirect('ed_integrator/index');
};

exports.processFile = function (req, res) {

    var splitOriginalName = req.file.originalname.split('.');

    var extension = splitOriginalName[splitOriginalName.length - 1];

    var errors = [];

    switch(extension.trim().toLowerCase()) {
        case 'csv':
            processCsv(req.file.path);
            break;

        case 'xls':
            processXls(req.file.path);
            break;

        case 'xlsx':
            processXls(req.file.path);
            break;

        default:
            errors.push('File type not permitted: ' + extension.trim().toLowerCase());
            res.render('sia_procesors/process_file', {
                errors: errors
            });
    }

};

function processCsv(path) {

    csv.fromPath(path)
        .on('data', function (data) {
            console.log(data);
        })
        .on('end', function () {
            console.log('read complete');
        });

    return 0;
}

function processXls(path) {

    var object = nodeXlsx.parse(path);

    console.log(object);

    return 0;

}