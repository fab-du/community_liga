var Schema                = require('mongoose').Schema;
var schema_daten          = require('./club_daten');

var schema = new Schema({

    _id        : Number,

    name       : String,

    flag       : String,

    daten      : schema_daten,

    statistik  : { type        : Number,  ref : 'ClubStat' },

    liga       : { type        : Number,  ref : 'Liga' },

    spiele     : [{ type        : Number,  ref : 'Spiel'    }],

    players    : [ {type       : Number , ref : 'Player'   }] , // ref. to Player

    trainer    : [ {type       : Number , ref : 'Person'   }] , // ref. to Person

    stadium    : {type         : Number,  ref : 'Stadium'  }, // ref. to stadium

    news       : [ {type       : Number,  ref : 'News'     }], // ref. to news

    praesident : [ {type       : Number , ref : 'Person'   }] // ref. to Person
    
});

module.exports = schema;
