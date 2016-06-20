'use strict';
/**
 * @ngdoc function
 * @name publicApp.controller:TeamCtrl
 * @description
 * # TeamCtrl
 * Controller of the publicApp
 */
angular.module('bundesLigaApp')
.controller('TeamCtrl', function ( $rootScope, $scope, $window, Rest ) {

    console.log ( $rootScope.ligaId )

    Rest.Liga.clubs( { ligaId : $rootScope.ligaId  } ).$promise.then( function( clubs ){
        $scope.clubs = clubs.clubs; 
    });

    /*
     *Rest.Club.find().$promise.then(function(clubs){ 
     *})
     */
})

.controller('teamDetailController', function(  $scope, $stateParams ){
    var id =  $stateParams.id;
    var club = $scope.clubs[id];
    delete club['spiele'];
    delete club['players'];
    delete club['news'];
    delete club['__v'];

    var daten = club['daten'];
    delete club['daten'];

    angular.extend( club, daten);

    $scope.club = club;
})

.controller('teamDetailControllerPlayers', function(  $scope, $stateParams, Rest){
    console.log( $stateParams.id )
    var id =  $stateParams.id;
    var _id= $scope.clubs[id]._id;

    Rest.Club.players( { clubId : _id  } ).$promise.then( function(players){
        var _players = players.players; 
        var __players = [];
        angular.forEach(  _players , function( k, v ){
            console.log( v );
            Rest.Player.findOne( { playerId : v } ).$promise.then( function(player){ __players.push(player); });
        })
        $scope.players = __players;

    })

})

.controller('teamDetailControllerNews', function(  $scope, $stateParams, Rest ){
    var id =  $stateParams.id;
    var _id= $scope.clubs[id]._id;

    Rest.Club.news( { clubId : _id  } ).$promise.then( function(news){
        var _news = news.news; 
        $scope.news = _news;
    })

})

.controller('teamDetailControllerStats', function(  $scope, $rootScope, $stateParams, Rest ){


    var findClub = function( _id , clubs ){
        var i=0, len=clubs.length;
            for (; i<len; i++) {
                if ( clubs[i]._id == _id ) {
                    return clubs[i];
                }
            }
            return null;
    };


    var gewonnen     = 0;
    var verloren     = 0;
    var unerschieden = 0;

    var id        = $stateParams.id;
    var _clubs    = $scope.clubs;
    var currentId = _clubs[ id  ]._id ;

    Rest.Club.spiele( { clubId : currentId} ).$promise.then( function(_spiele){
        console.log( _spiele )
        var spiele = _spiele.spiele;
        
        console.log( spiele )
        angular.forEach( spiele, function( v, k ){
            console.log( v )
            if( v.A.clubAId ===  currentId && v.A.goalA > v.B.goalB  ){
                gewonnen++;
            }
            else if( v.A.clubAId ===  currentId && v.A.goalA < v.B.goalB  ){
                gewonnen++;
            }

            if( v.B.clubBId ===  currentId && v.B.goalB > v.A.goalA  ){
                gewonnen++;
            }
            else if( v.B.clubBId ===  currentId && v.B.goalB < v.A.goalA  ){
                verloren++;
            }

            if( (v.B.clubBId ===  currentId || v.A.clubAId === currentId) && v.B.goalB === v.A.goalA  ){
                unerschieden++;
            }

            
        });

        console.log( verloren, gewonnen, unerschieden );
        $scope.data = [verloren, gewonnen, unerschieden];
        $scope.labels = ["Verloren", "Gewonnen", "Null"];

    });


})

.controller( 'teamDetailControllerSpiele', function( $scope, $stateParams, Rest ){
    var id =  $stateParams.id;
    var _id= $scope.clubs[id]._id;

    var findClub = function( _id , clubs ){
        var i=0, len=clubs.length;
            for (; i<len; i++) {
                if ( clubs[i]._id == _id ) {
                    return clubs[i];
                }
            }
            return null;
    };

    Rest.Club.spiele({ clubId : _id } ).$promise.then( function(spiele){
        $scope.spiele = [];
        var _spiele = spiele.spiele; 
        var clubs = $scope.clubs; 

        angular.forEach( _spiele, function( spiel , key ){
            var _result = { A : {  }, B : {} };
            _result.A.club = findClub( spiel.A.clubAId, clubs );
            _result.A.goals = spiel.A.goalA;
            _result.B.club = findClub( spiel.B.clubBId, clubs );
            _result.B.goals = spiel.B.goalB;
            _result.date = spiel.datum;
            $scope.spiele.push( _result );

        });
    })
})
