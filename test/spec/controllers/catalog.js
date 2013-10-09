'use strict';

describe('Controller: CatalogCtrl', function () {

  // load the controller's module
  beforeEach(module('catalogApp'));

  var CatalogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatalogCtrl = $controller('CatalogCtrl', {
      $scope: scope
    });
  }));

});
