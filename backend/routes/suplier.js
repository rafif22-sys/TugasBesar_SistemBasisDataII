const express = require('express');
const router = express.Router();
const Suplier = require('../models/Suplier'); 

// CREATE
router.post('/', async (req, res) => {
    try {
        const suplier = new Suplier(req.body);
        await suplier.save();
        res.status(201).json(suplier);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ
router.get('/', async (req, res) => {
    const data = await Suplier.find();
    res.json(data);
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updated = await Suplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Suplier.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted Successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
