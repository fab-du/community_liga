'use strict';
var mongoose = require('mongoose');

var schema   = new mongoose.Schema({
    _id      : Number,

    datum    : Date,

    goal_art : String, // zb : 11-meter.Straffe ... etc

    goal_by  : { type : Number, ref  : 'Player' },

    am_spiel : { type : Number , ref : 'Spiel'  }
});

module.exports = schema;
