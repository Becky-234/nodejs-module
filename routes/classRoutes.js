const express = require('express');
const router = express.Router();
 const path = require("path");

//5. routes
//Syntax of a route
//router.METHOD(PATH, HANDLER);

// Simple request time logger
// app.use((req, res, next) => {
//     console.log("A new request received at " + Date.now());

//     // This function call tells that more processing is
//     // required for the current request and is in the next middleware
//     // function/route handler.
//     next();
// });

//Simple request time logger for a specific route    (for this example, it is the home page)
// app.use('/home', (req, res, next) => {
//     console.log('A new request received at ' + Date.now());
//     next();
// });

router.get('/home', (req, res) => {
    res.send('Homepage! Hello world.');
});

router.get('/about', (req, res) => {
    res.send('About page. Nice.');
});

router.get('/becky', (req, res) => {
    res.send("This is Becky's page.");
});

router.post('/data', (req, res) => {
    res.send("Data recieved!");
});

router.put('/user', (req, res) => {
    res.send("Got a PUT request at /user.");
});

router.delete('/user', (req, res) => {
    res.send("Got a DELETE request at /user.");
});


//Path parameters and query strings
//Pathparams
router.get('/pathparams/:username', (req, res) => {
    res.send("This is the username " + req.params.username);
});

//Query string
router.get('/students', (req, res) => {
    res.send("This is " + req.query.name + " from cohort " + req.query.cohort + " class of " + req.query.class)
});


//Serving HTML files
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
});

//get the form
router.get('/registeruser', (req, res) => {
    res.sendFile(__dirname + '/html/form.html');
});

//post the route
router.post('/registeruser', (req, res) => {
    console.log(req.body);
});

//Signing up a manager form
router.get('/manager-signup', (req, res) => {
    res.sendFile(path.join(__dirname + '/../manager.html'));
});

router.post('/manager-signup', (req, res) => {
    console.log(req.body);
});


module.exports = router 