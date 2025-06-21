const express = require('express');
const router = express.Router();
const Produk = require('../models/Produk');

// Create
router.post('/',async(req, res) => {
    try{
        const produk = new Produk(req.body);
        await produk.save();
        res.status(201).json(produk);
    } catch(err){
        res.status(400).json({error : err.message});
    }
});

// READ
router.get('/', async (req, res) => {
    const data = await Produk.find();
    res.json(data);
});

//UPDATE
router.put('/:id', async (req,res) => {
    try {
        const updated = await Produk.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updated);
    } catch (err){
        res.status(400).json({error: err.message});
    }
});

// DELETE 
router.delete('/:id', async (req, res) => {
    try {
        await Produk.findByIdAndDelete(req.params.id);
        res.json({message: 'Deleted Successfully' });
    } catch (err){
        res.status(400).json({error: err.message})
    }
});

module.exports = router;