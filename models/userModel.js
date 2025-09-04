const mongoose = require('mongoose') 

const signupSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('UserModel', signupSchema);