var mongoose = require('mongoose');

var schema = new mongoose.Schema({

    _id     : Number,

    strasse : String,

    nummer  : Number,

    plz     : Number,

    stadt   : String
    
});



module.exports = schema;
