'use strict';
var Schema         = require('mongoose').Schema;
var schema_address = require('./address')

var schema         = new Schema({

    _id     : Number,

    address : schema_address,
    
    plaetze : Number,

    baujahr : Date

})

module.export = schema;
