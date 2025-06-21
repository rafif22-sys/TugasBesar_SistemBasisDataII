const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app  = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/gudang',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

const produkRoutes = require('./routes/produk');
app.use('/api/produk',produkRoutes);

const suplierRoutes = require('./routes/suplier');
app.use('/api/suplier',suplierRoutes);

const adminRoutes = require('./routes/admin');
app.use('/api/admin',adminRoutes);

const supervisorRoutes = require('./routes/supervisor');
app.use('/api/supervisor',supervisorRoutes);

const geraiRoutes = require('./routes/gerai');
app.use('/api/gerai',geraiRoutes);

const pengirimanRoutes = require('./routes/pengiriman');
app.use('/api/pengiriman',pengirimanRoutes);

const restockRoutes = require('./routes/restock');
app.use('/api/restock',restockRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhoost:${PORT}`))