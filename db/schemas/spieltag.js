'use strict';
var mongoose = require('mongoose');

var schema   = new mongoose.Schema({
   _id     : Number,

   nummber : Number,

   datum   : Date,

   spiele  : [ { type : Number , ref : 'Spiel' } ], // ref. Spiel

   liga    : [ { type : Number , ref : 'Liga' } ] // ref. Liga
});

module.exports = schema;
