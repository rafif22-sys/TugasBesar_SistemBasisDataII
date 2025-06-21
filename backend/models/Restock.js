const mongoose = require('mongoose');

const restockSchema = new mongoose.Schema({
    id_restock : {type:String,required:true},
    id_suplier : {type:String,required:true},
    id_produk : {type:String,required:true},
    id_admin : {type:String,required:true},
    nama_produk : {type:String,required:true},
    harga_beli_per_satuan:{type: Number, required:true},
    jumlah_penambahan_stock:{type: Number, required:true},
    tanggal_restock : {type:Date,required:true}},
    {collection:'admin'}
);

module.exports = mongoose.model('Restock', restockSchema, 'restock');