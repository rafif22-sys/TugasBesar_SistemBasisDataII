const express = require('express');
const router = express.Router();
const Restock = require('../models/Restock'); 

// CREATE
router.post('/', async (req, res) => {
    try {
        const restock = new Restock(req.body);
        await restock.save();
        res.status(201).json(restock);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ
router.get('/', async (req, res) => {
    const data = await Restock.find();
    res.json(data);
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updated = await Restock.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Restock.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted Successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
