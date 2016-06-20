'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicApp
 */
angular.module('bundesLigaApp')

.controller('MainControllerLiga', function( $state, $rootScope, $scope,  Rest ){
    Rest.Liga.find( ).$promise.then( function( ligas ){
        $rootScope.ligas = ligas;

    });

    $scope.clickHandler = function( params ){
        console.log( params )
        $state.go( 'liga', { ligaId : params }  );
    }

    $scope.clickHandlerToClubs = function( params ){
        $state.go('liga.id.clubs', { id : params });
    }

})

.controller('MainControllerNews', function( $state, $scope,  Rest ){
    $scope.menus = [ "liga", "player", "allg", "dev" ];
})

.controller('menuController', function( $rootScope, $scope , $state ){
    $scope.onTabSelected = function( ){
        $state.go( 'main' );
    }
});

