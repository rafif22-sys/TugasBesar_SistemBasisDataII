const mongoose = require('mongoose');

const pengirimanSchema = new mongoose.Schema({
    id_pengiriman : {type:String,required:true},
    id_produk : {type:String,required:true},
    nama_produk:{type: String, required:true},
    jumlah_pengiriman : {type:Number,required:true},
    id_gerai : {type:String,required:true},  
    kota_tujuan : {type:String,required:true}
    },
    {collection:'pengiriman'}
);

module.exports = mongoose.model('Pengiriman', pengirimanSchema, 'pengiriman');