'use strict';

var db = require('../index')

var faker = require('faker');
    faker.locale = "de";


var fakeFuture = function(){
    return faker.date.future(0.5);
};

var fakePast = function(){
    return faker.date.past(0.5);
};

var makeSpielTag = function( _id, _spielTagNumber, _datum  ){

var spieltag     = {
   _id     : _id,
   nummber : _spielTagNumber,
   datum   : _datum ,
   liga    : 1,
   spiele  : [ ] // ref. Spiel
};
return spieltag;
};

var seed = function( cb ){

    for( var i = 1; i < 33; i++ ){
        var spielTag; 

        if ( i <= 18 ){
           spielTag= makeSpielTag( i, i, faker.date.past(0.5) );
        }
        else{
           spielTag= makeSpielTag( i, i, faker.date.future(0.5) ); 
        } 

        var spielTagToSave = new db.SpielTag( spielTag );
        spielTagToSave.save();
    }

    return cb();
};


module.exports = { seed : seed };
