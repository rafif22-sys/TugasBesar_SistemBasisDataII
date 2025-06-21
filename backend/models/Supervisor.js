const mongoose = require('mongoose');

const supervisorSchema = new mongoose.Schema({
    id_supervisor : {type:String,required:true},
    nama : {type:String,required:true},
    gaji:{type: Number, required:true},
    no_hp : {type:Number,required:true},  
    email : {type:String,required:true}},
    
    {collection:'supervisor'}
);

module.exports = mongoose.model('Supervisor', supervisorSchema, 'supervisor');