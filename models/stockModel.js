const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
    pdttype: {
        type: String
    },
    pdtname: {
        type: String
    },
    cprice: {
        type: Number
    },
    pdtprice: {
        type: Number
    },
    pdtquantity: {
        type: Number
    },
    quality: {
        type: String
    },
    date: {
        type: Date
    },
    supplier: {
        type: String
    }

});

module.exports = mongoose.model('StockModel', stockSchema);