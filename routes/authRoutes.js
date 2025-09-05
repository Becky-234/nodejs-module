const express = require('express');
const router = express.Router();

const UserModel = require('../models/userModel')

//Getting the manager signup form
router.get('/managersignup', (req, res) => {
    res.render('managersignup', { title: 'manager signup page' })
});

router.post('/managersignup', (req, res) => {
//Todo:Handle insertion of duplicate data using a try and catch (check if the individual exists, redirect to the login)
    const user = new UserModel(req.body);
    console.log(req.body);
    user.save()
    res.redirect('/login');
});

 
//Getting the Login form
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login page' })
});

router.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/stock')
});

//Getting stock 
// router.get('/stock', (req, res) => {
//     res.render('stock', { title: 'stock page' });
// });

// router.post('/stock', (req, res) => {
//     console.log(req.body);
// });



module.exports = router;