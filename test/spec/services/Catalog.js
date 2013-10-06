'use strict';

describe('Service: Catalog', function () {

  // load the service's module
  beforeEach(module('catalogApp'));

  // instantiate service
  var Catalog;
  beforeEach(inject(function (_Catalog_) {
    Catalog = _Catalog_;
  }));

  it('should do something', function () {
    expect(!!Catalog).toBe(true);
  });

});
