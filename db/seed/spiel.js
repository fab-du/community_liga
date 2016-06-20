'use strict';

var db = require('../index');

var helper = require('./helper');


function seedSpiel( cb ){

    var spiele = [];
    var spiel_id = 1;

    var spielTagId = 1;
    var goalId = 0;

    var bootstrapSpiel = function( cb  ){
        db.Club.find( function(err, clubs){
            cb( clubs);
        });
    }

     var createSpiel = function( clubA , clubB ){
        var cb = function( exist ){
            if( exist === true ){
                console.log( "exist \t" )
            }
            else if( exist === false){

                try {
                    var spiel = { _id : spiel_id , 

                        A:{
                            clubAId : clubA._id,
                        },
                        B:{
                            clubBId : clubB._id,
                        }
                   
                    };

                    if ( spielTagId  === 33 ){
                        spielTagId = 1;
                    }

                    if( spielTagId < 18 ){
                        // some goals 
                        var goalA = helper.random( helper.random( 10 ) );
                        var goalB = helper.random( helper.random( 10 ) );
                        spiel.A.goalA = goalA;
                        spiel.B.goalB = goalB;

                    }//end of if goals 

                    var toSave = new db.Spiel( spiel );
                    toSave.save( function( errors ){
                        console.log( errors );


                        db.SpielTag.findOne( { _id : spielTagId }, function(err, spieltag ){
                            if( spieltag ){
                              spieltag.spiele.push( toSave._id );
                              spieltag.save();
                            }
                            spielTagId++;
                        });
                        
                        db.Club.findOne({ _id : clubA._id}, function(err, club ){
                            club.spiele.push( toSave._id );
                            club.save();
                        });

                        db.Club.findOne({ _id : clubB._id}, function(err, club ){
                            club.spiele.push( toSave._id );
                            club.save();
                        });


                    });

                } catch (e) {
    
                }

                spiel_id = spiel_id + 1; 
            }
        };



        var query = db.Spiel.where({ _id : spiel_id });
        query.findOne( function( err, club ){
            if( !err && club !== null ){
                console.log("Spiel already present in DB, you may want to update");
                return cb( true );
            }
            else{
                return cb( false )
            }
        });
     }

 var putData = function ( clubs ){
     var _clubs = clubs ;


    for (var i = 0; i < _clubs.length ; i++) {
    for ( var j = 0;  j <_clubs.length ; j++) {
            var _i = i;
            var _j = j;
            if ( _clubs[_i]._id !== _clubs[_j]._id ){
                createSpiel( _clubs[_i], _clubs[_j] );
            }

        }
    }

}


bootstrapSpiel( putData );
db.Spiel.find( function( err , spiele ){
    console.log( spiele.length )
})

return cb();
}

var seed = seedSpiel;


module.exports = {
    seed : seed
}
