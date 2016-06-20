'use strict';

describe('Controller: StatistikCtrl', function () {

  // load the controller's module
  beforeEach(module('publicApp'));

  var StatistikCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatistikCtrl = $controller('StatistikCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StatistikCtrl.awesomeThings.length).toBe(3);
  });
});
