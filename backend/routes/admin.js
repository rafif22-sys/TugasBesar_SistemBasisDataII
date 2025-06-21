const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// CREATE
router.post('/', async (req, res) => {
    try {
        // Ubah "" jadi null agar valid untuk Date
        if (
            typeof req.body.tanggal_akhir_kontrak === "string" &&
            req.body.tanggal_akhir_kontrak.trim() === ""
        ) {
            req.body.tanggal_akhir_kontrak = null;
        }

        if (
            typeof req.body.tunjangan === "string" &&
            req.body.tunjangan.trim() === ""
        ) {
            req.body.tunjangan = 0;
        }

        console.log("Data yang akan disimpan:", req.body); // Cek final value

        const admin = new Admin(req.body);
        await admin.save();
        res.status(201).json(admin);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});



// READ
router.get('/', async (req, res) => {
    const data = await Admin.find();
    res.json(data);
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updated = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Admin.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted Successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
