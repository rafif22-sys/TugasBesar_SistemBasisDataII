const express = require('express');
const router = express.Router();
const Gerai = require('../models/Gerai'); 

// CREATE
router.post('/', async (req, res) => {
    try {
        const gerai = new Gerai(req.body);
        await gerai.save();
        res.status(201).json(gerai);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ
router.get('/', async (req, res) => {
    const data = await Gerai.find();
    res.json(data);
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updated = await Gerai.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Gerai.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted Successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
