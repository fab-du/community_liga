'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:accessLevel
 * @description
 * # accessLevel
 */
angular.module('bundesLigaApp')
  .directive('accessLevel', function () {
    return {
      scope : false,
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        if  ($rootScope.isLoggedIn === false ){
            element.css.display = false;
        }
      }
    };
  });
