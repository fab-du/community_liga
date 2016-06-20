'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:LigaCtrl
 * @description
 * # LigaCtrl
 * Controller of the publicApp
 */

angular.module('bundesLigaApp')

.controller('LigaController', function ( $scope, Rest ) {
    Rest.Liga.find( ).$promise.then( function( ligas ){
        $scope.ligas = ligas;
    });
})

.controller('LigaControllerDetail', function ( $stateParams, $scope, Rest ) {
    
})

.controller('LigaControllerStats', function ( $stateParams, $scope, Rest ) {

})

.controller('LigaControllerSpiele', function ( $stateParams, $scope, Rest ) {
    console.log( $stateParams.id );
    Rest.Liga.spieltage( { ligaId : $stateParams.id } ).$promise.then(function( spieltage ){
        $scope.spielTage =  spieltage.spielTage;
    });
})

.controller('LigaControllerNews', function ( $stateParams, $scope, Rest ) {
    Rest.Liga.news( { ligaId : $stateParams.id  } ).$promise.then( function( news ){
        $scope.news = news.news;
    });

})
.controller('LigaControllerClubs', function ( $stateParams, $scope, $state, $rootScope, Rest ) {
    $rootScope.ligaId = $stateParams.id;
    $state.go( 'clubs' );
});
