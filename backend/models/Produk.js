const mongoose = require('mongoose');
const { Schema } = mongoose;

const barangSchema = new Schema({
    id_produk : { type: String, required: true },
    nama : { type: String, required: true },
    jenis : { type: String, required: true },
    id_suplier : { type: String, required: true },
    stok : { type: Number, required: true },
    harga_beli : { type: Number, required: true },
    harga_jual : { type: Number, required: true },
    satuan : { type: String, required: true },
    variasi : [{ type: Schema.Types.Mixed }],  // fleksibel!
    no_rak : { type: String, required: true },
    tanggal_terakhir_restock : { type: Date, required: true },
    jenis_penyimpanan : { type: String, required: true }
}, { collection: 'produk' });

module.exports = mongoose.model('Produk', barangSchema);
