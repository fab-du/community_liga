var Schema = require('mongoose').Schema;

var schema = new Schema({

    _id           : Number,

    name          : [ String ],

    vorname       : [ String ],

    gewicht       : String,

    geboren_am    : Date,

    nationalitaet : String

});


module.exports = schema;
