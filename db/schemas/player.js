'use strict';
var mongoose = require('mongoose');

var schema   = new mongoose.Schema({

    _id         : Number,

    position    : String,

    triconumber : Number,

    person      : { type   : Number , ref : 'Person'    },

    goals       : [{ type   : Number , ref : 'Goal'      }],

    news        : [ { type : Number , ref : 'News'      }], 

    statistic   : { type   : Number , ref : 'PlayerStat'},

    club        : { type : Number, ref : 'Club'},

    man_of_the_game : [{ type : Number , ref : 'Spiel' }]

});


module.exports = schema;
