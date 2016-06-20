'use strict';
var mongoose    = require('mongoose');
var schema_club = require('./club')

var schema      = new mongoose.Schema({

    _id       : Number,

    name      : String,

    country   : String,

    division  : Number,

    saison    : String,

    flag      : String,

    spielTage : [{type : Number , ref : 'SpielTag'}],

    news      : [{ type  : Number , ref : 'News' }], // ref. to news

    clubs     : [{type : Number , ref : 'Club'}],

    sieger    : { type  : Number , ref : 'Club' } // ref. to club who win the liga
});

module.exports = schema;

