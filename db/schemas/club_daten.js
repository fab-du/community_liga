'use strict';
var Schema         = require('mongoose').Schema;
var schema_address = require('./address');

var schema         = new Schema({

        _id        : Number,

        address    : schema_address,

        telephon   : String,

        website    : String,

        homepage   : String,

        instagram  : String,

        facebook   : String,

        vine       : String,

        foursquare : String,

        start_date : Number,

        club_color : [String]
});


module.exports = schema;
