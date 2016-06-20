'use strict';
var mongoose     = require('mongoose');

var schema = new mongoose.Schema({

    _id        : Number,

    spielTag : { type : Number, ref : 'SpielTag' },

    man_of_the_game : { type: Number, ref : 'Player' },

    A          :
    {
        clubAId : { type   : Number , ref : 'Club'},
        goalA   : Number
    },

    B          :
    {
        clubBId : { type   : Number , ref : 'Club'},
        goalB   : Number

    }
    
});

module.exports = schema;

