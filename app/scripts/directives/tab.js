'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:tableau
 * @description
 * # tab
 */
angular.module('bundesLigaApp')
  .directive('tableau', function () {
    var controller = ['$scope', function($scope){
        $scope.gridOptions = {
         enableSorting : true,
         enableCellEditOnFocus : true,
         enableFiltering : true

        };


        $scope.gridOptions.onRegisterApi = function(gridApi){
            gridApi.cellNav.on.navigate($scope,function(newRowCol, oldRowCol){
                $log.log('navigation event');
            });
        };


    }];

    return {
      controller : controller,
      scope : {
          data : '=',
          operations : '='
      },

      template: 
          '<div ui-grid="gridOptions">' + 
          '</div>',
      restrict: 'E',
      scope : true,

      link: function postLink(scope, element, attrs) {

      }
    };
});

