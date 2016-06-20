
'use strict';

var clubs = require('./clubs').clubs;
var db = require('../index');
var faker = require('faker');
faker.locale = "de";


var seedPlayers = function( cb ){
   
db.Person.find( function( err , persons ){
    var counter = 2; 
    for (var i = 0, len = clubs.length - 9 ; i < len; i++) {
        db.Club.findOne( {name : clubs[i].name }, function(err, club){
            for( var j=0; j < 22; j++  ){
                  var player = { _id : counter, person : persons[counter]._id };
                  var playerToSave = new db.Player( player  );
                  playerToSave.save( function( err ){
                    if( err ) console.log( "Player couldnt be created" );
                  })

                  club.players.push( playerToSave );
                  counter++;
            }
            club.save( function( err ){
                if( err ) console.log( "Player already exist in club" );
            });
        });
    }

    return cb();
});

};

var seed = seedPlayers;

module.exports = { seed : seed };

