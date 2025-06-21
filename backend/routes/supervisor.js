const express = require('express');
const router = express.Router();
const Supervisor = require('../models/Supervisor'); 

// CREATE
router.post('/', async (req, res) => {
    try {
        const supervisor = new Supervisor(req.body);
        await supervisor.save();
        res.status(201).json(supervisor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ
router.get('/', async (req, res) => {
    const data = await Supervisor.find();
    res.json(data);
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updated = await Supervisor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Supervisor.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted Successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
