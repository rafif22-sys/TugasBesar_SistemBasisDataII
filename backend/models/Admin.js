const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    id_admin : {type:String,required:true},
    nama : {type:String,required:true},
    gaji:{type: Number, required:true},
    status : {type:String,required:true},
    akun: 
    {
      username: { type: String, required: true },
      password: { type: String, required: true }
    },
    id_pengawas : {type:String,required:true},
    tanggal_rekrut : {type:Date,required:true,default:null},
    tanggal_akhir_kontrak: {
      type: Date,
      default: null,
      set: val => val === "" ? null : val
    },

    tunjangan : {type:Number,required:false,default:0}},
    {collection:'admin'}
);

module.exports = mongoose.model('Admin', adminSchema, 'admin');