'use strict';
var Schema = require('mongoose').Schema;

var schema = new Schema({
    _id        : Number,

    title      : String,

    news       : String,

    authors    : [ { type   : Number, ref : 'Person' } ],

    liga       :  { type   : Number, ref : 'Liga' } ,

    Player     :  { type   : Number, ref : 'Player' } ,

    Club       :  { type   : Number, ref : 'Club' } ,

    created    : Date,

    updated    : Date,

    references : [ String ]
});

module.exports = schema;
