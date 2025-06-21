const express = require('express');
const router = express.Router();
const Pengiriman = require('../models/Pengiriman'); 

// CREATE
router.post('/', async (req, res) => {
    try {
        const pengiriman = new Pengiriman(req.body);
        await pengiriman.save();
        res.status(201).json(pengiriman);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ
router.get('/', async (req, res) => {
    const data = await Pengiriman.find();
    res.json(data);
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updated = await Pengiriman.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Pengiriman.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted Successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
