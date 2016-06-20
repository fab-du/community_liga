'use strict';

var db = require('../index');
var helper = require('./helper');
var clubs = require('./clubs').clubs;


var liga = 
{

    _id       : 1,

    name      : "Bundesliga",

    country   : "Deutschland",

    division  : "1",

    saison    : "2015/2016",

    flag      : "germany.jpg",

    clubs     : [],

    spielTage : []

};


var seed = function( cb ){

    for (var i = 0, len = clubs.length; i < len; i++) {
        liga.clubs.push( clubs[i]._id );
    }

    for (var i = 1, len = 33; i < len; i++) {
        liga.spielTage.push(i);
    }

    var ligaToSave = new db.Liga( liga );

    ligaToSave.save( function( err ){
        if( err ) {
          console.log ( "Liga " + liga.name + " already present" );
          var query = db.Liga.findOne({ _id : 1});

          query.findOneAndUpdate( liga, function( err, _club ){
              if(!err) return cb();
          });

        }
        
        if( !err ){
           console.log ( "Liga " + liga.name + " inserted" );
           return cb();
        } 
    });
}

module.exports = {
    seed : seed
}
