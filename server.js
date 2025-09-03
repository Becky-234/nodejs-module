//1. Dependencies
const express = require('express');
const path = require('path');

//import routes
//const classRoutes = require('./routes/classRoutes');
const authRoutes = require('./routes/authRoutes');
const stockRoutes = require('./routes/stockRoutes');

//2. Instantiations
const app = express();
const port = 3000;

//3. Configurations
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//4. Middleware
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));    //helps to pass data from forms


//5. Routes
//Using imported routes
// app.use('/', classRoutes);
app.use('/', authRoutes);
app.use('/', stockRoutes);


//non existing routes
app.use('/becky', (req, res) => {
    res.status(404).send("Opps! Route not found");
});


 

//Bootstraping Server
//This should be always the last line in this file. (very important)
app.listen(port, () => console.log(`listening on port ${port}`));