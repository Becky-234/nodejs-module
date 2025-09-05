const express = require('express');
const router = express.Router();

const StockModel = require('../models/stockModel');

router.get('/stock', (req, res) => {
    res.render('stock', { title: 'Stock page' });
});
router.post('/stock', async (req, res) => {         //This helps to post data in the terminal
    try {
        const stock = new StockModel(req.body)
        console.log(req.body);
        await stock.save()
        res.redirect('/dashboard')
    } catch (error) {
        console.error(error)
        res.redirect('/stock')
    }
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard', { title: 'Dashboard page' });
});
router.post('/dashboard', (req, res) => {
    console.log(req.body)
});


module.exports = router;