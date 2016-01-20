'use strict';

describe('Controller: Home', function () {

  // load the controller's module
  beforeEach(module('outsource'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should return users', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });
});
