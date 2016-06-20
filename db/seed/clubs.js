'use strict';

var db = require('../index');
var faker = require('faker');
var helper = require('./helper');


var clubs = [
{
_id   :  20 ,
name : "FC Bayern" ,
flag : "fcb.gif",

daten : {
    address :  "Säbener Strasse 51-57, 81547 München" ,
    address : {
        strasse : "Saebener Strasse",
        nummer : 51,
        plz : 81547,
        stadt : "Muenchen"
    },

    telephon :  "089 - 699310",
    website : "www.fcbayern.de",
    homepage : "www.fcbayern.de", 
    facebook :  "www.facebook.com/FCBayern",
    start_date : 1900,
    club_color : ["rot", "weiss"],
    trainer : [ "Pep Guardiola", "Hermann Gerland", "Domenec Torrent", "Toni Tapalovic (Torwart-Trainer)" ],
    ceo : "Karl Hopfner"
}

},

{
_id :  21 ,
name : "Borussia Dortmund" ,
flag : "dortmund.gif" 
},


{
_id :  129 ,
name : "Borussia M-Gladbach" ,
flag : "gladbach.gif"
},

{
_id :  23,
name : "Hertha BSC",
flag : "bsc.gif"
},

{
_id : 40,
name : "VfL Wolfsburg",
flag : "vfl_wolf.gif"
},

{
_id : 41,
name : "Schalke 04",
flag : "schalke.gif" 
},

{
_id : 44,
name : "Mainz 05",
flag : "mainz.gif"
},

{
_id : 100,
name : "Bayer 04",
flag : "bayer04.gif"
},

{
_id : 48,
name : "Hamburger SV" ,
flag : "hamburgsv.gif" 
},

{
_id : 50,
name : "1. FC Koeln" ,
flag : "fck.gif"
},

{
_id : 60,
name : "FC Ingolstadt" ,
flag :"ingolstadt.gif"
},

{
_id : 199,
name : "Darmstadt" ,
flag : "darmstadt.gif" 
},

{
_id : 64,
name : "Eintracht Frankfurt" ,
flag : "eintrachtfranckfurt.gif" 
},

{
_id : 70,
name : "Hannover 96",
flag: "Hannover_96.gif"
},

{
_id : 77,
name : "FC Augsburg",
flag : "FC_Augsburg.gif" 
},

{
_id : 78,
name : "SV Werder",
flag : "werder_bremen.gif"
},

{
_id : 79,
name : "TSG Hoffenheim",
flag : "TSG_Hoffenheim.gif"
},

{
_id : 80,
name : "VfB Stuttgart",
flag : "VfB_Stuttgart.gif"
},

];


var addRandomInfo = function( club ){

    club.liga = 1;

    var name = club.name;
    var ret = name.substring();
    var _ret = "";
    for (var i = 0, len = ret.length; i < len; i++) {
        _ret += ret[i];
    }

    var _name = _ret.toLowerCase();

    var daten = {};
    daten.address = helper.address();
    daten.address = helper.address();
    daten.telephon = faker.phone.phoneNumber();
    daten.facebook = "http://facebook.de/" + _name; 
    daten.vine = "http://vine.com/" + _name;
    daten.homepage = "http://" + _name + ".de";
   return club;
}

var createClub = function( club ){
    var query = db.Club.where({ _id : club._id });

    query.findOne( function( err, _club ){

        if( _club ){
            query.findOneAndUpdate( club , function( err ){
                if( !err ) console.log( "update club " + club.name );
            });
        }

        if( !_club ){
            var clubToSave = new db.Club( club );
            clubToSave.save( function( err ){
                if( !err ) console.log("club " + club.name + "inserted!!" );
            });
        }
    });
};


function seedClub( cb ){
    for (var i = 0, len = clubs.length; i < len; i++) {
        createClub(  addRandomInfo(clubs[i] ));
    }

    return cb();
}

var seed = seedClub;

module.exports = {
    clubs : clubs, 
    seed  : seed 
};
