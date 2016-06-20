'use strict';
var db =require('../index');


var makeGoal = function( id ){
    var ret = {
        _id      : id,
        goal_art : "kick" 
    };
    return ret;
};

var seed = function( cb ){

    var ids = 500;

    /*
     *var goals = [];
     *for (var i = 0, len = ids ; i < len; i++) {
     *    goals.push ( makeGoal(i) );
     *}
     */

    for (var i = 0, len = ids ; i < len; i++) {
       var goal = new db.Goal( makeGoal( i ) )
       goal.save( function(err){
            if( err ) {
              console.log( "goal already exist !!\n" );
            }
       })
    }

    return cb();
}


seed( function(){} )

module.exports = {
    seed : seed
}
