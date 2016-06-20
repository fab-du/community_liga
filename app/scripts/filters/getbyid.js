'use strict';

/**
 * @ngdoc filter
 * @name publicApp.filter:getById
 * @function
 * @description
 * # getById
 * Filter in the publicApp.
 */
angular.module('bundesLigaApp')
  .filter('getById', function () {
  return function(input, id) {
    var i=0, len=input.length;
    for (; i<len; i++) {
      if (+input[i].id == +id) {
        return input[i];
      }
    }
    return null;
  }

});
