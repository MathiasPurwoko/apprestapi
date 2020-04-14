'use strict';

var response = require('./res');
var connection =require('./koneksi');

exports.index = function(res,res){
    response.ok('Aplikasi REST API ku berjalan',res)
};

//menampilkan semua data mahasiswa

exports.tampilsemuamahasiswa = function(req,res){
    connection.query('SELECT = FROM mahasiswa', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else {
        response.ok(row, res)
    }
});
};

//memanmpilkan  data menurut id
exports.tampildasarkanid = function(req,res){
    let id = req.parans.id;
    connection.query('SELECT = FROM mahasiswa WHERE id_mahasiswa = ?', [id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(row, res)
        } 
    });
};
