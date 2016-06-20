'use strict';
var mongoose    = require('mongoose');

var mongo_rest  = require('mongoose-express-router');

 var Address    = mongoose.model('Address', 
                                 require('./address').plugin(mongo_rest));

 var Ceo        = mongoose.model('Ceo', 
                                 require('./ceo').plugin(mongo_rest));

 var ClubDaten  = mongoose.model('ClubDaten', 
                                 require('./club_daten').plugin(mongo_rest));

 var Club       = mongoose.model('Club', 
                                 require('./club').plugin(mongo_rest));

 var ClubStat   = mongoose.model('ClubStat', 
                                 require('./club_statistic').plugin(mongo_rest));

 var Goal       = mongoose.model('Goal', 
                                 require('./goals').plugin(mongo_rest));

 var Liga       = mongoose.model('Liga', 
                                 require('./liga').plugin(mongo_rest));

 var News       = mongoose.model('News', 
                                 require('./news').plugin(mongo_rest));

 var Person     = mongoose.model('Person', 
                                 require('./person').plugin(mongo_rest));

 var Player     = mongoose.model('Player', 
                                 require('./player').plugin(mongo_rest));

 var PlayerStat = mongoose.model('PlayerStat', 
                                 require('./player_statistic').plugin(mongo_rest));

 var Spiel      = mongoose.model('Spiel', 
                                 require('./spiel').plugin(mongo_rest));

 var SpielTag   = mongoose.model('SpielTag', 
                                 require('./spieltag').plugin(mongo_rest));

 var Stadium    = mongoose.model('Stadium', 
                                 require('./stadium'));



 module.exports = {
     Address    : Address,
     Ceo        : Ceo,
     ClubDaten  : ClubDaten,
     Club       : Club,
     ClubStat   : ClubStat,
     Goal       : Goal,
     Liga       : Liga,
     News       : News,
     Person     : Person,
     Player     : Player,
     PlayerStat : PlayerStat,
     Spiel      : Spiel,
     SpielTag   : SpielTag,
     Stadium    : Stadium
 };
