'use strict'
var mongoose    = require('mongoose');
var schema_liga = require('./liga');

var schema      = new mongoose.Schema({

    _id               : Number,

    Sieger            : [ { type : Number , ref : 'Liga'} ], //ref. liga

    gewonnen_spiel    : Number,

    verlorene_spiel   : Number,

    null_spiel        : Number,

    ranking           : Number,

    statistic_of_club : { type   : Number , ref : 'Club'}

});

module.exports = schema;

