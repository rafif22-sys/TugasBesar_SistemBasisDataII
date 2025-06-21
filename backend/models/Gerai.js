const mongoose = require('mongoose');

const geraiSchema = new mongoose.Schema({
    id_gerai : {type:String,required:true},
    alamat : {type:String,required:true},
    jam_operasional:{type: String, required:true},
    kepala_toko : {type:String,required:true},  
    domisili : {type:String,required:true},
    contact : {type:Number,required:true}
    },
    {collection:'gerai'}
);

module.exports = mongoose.model('Gerai', geraiSchema, 'gerai');