const mongoose = require('mongoose');

const suplierSchema = new mongoose.Schema({
    id_suplier : {type:String,required:true},
    nama : {type:String,required:true},
    alamat : {type:String,required:true},
    contact:{type: Number, required:true},
    email : {type:String,required:true},
    status_kerjasama : {type:String,required:true}},
    {collection:'suplier'}
);

module.exports = mongoose.model('Suplier', suplierSchema, 'suplier');