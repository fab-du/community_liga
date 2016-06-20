var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id : Number,

    game_begin : Number,

    game : Number,

    game_min : Number,

    possession_of_ball : Number,

    yellow_card : Number,

    yellow_red_card : Number,

    red_card : Number,

    man_of_the_game : [{ type: Number, ref : 'Spiel' }],

    statistic_of_player : { type : Number , ref : 'Player' }

});

module.exports = schema;

