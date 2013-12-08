'use strict';

describe('Controller: CatalogtagCtrl', function () {

  // load the controller's module
  beforeEach(module('catalogApp'));

  var CatalogtagCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatalogtagCtrl = $controller('CatalogtagCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
