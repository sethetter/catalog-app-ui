'use strict';

describe('Service: Catalogs', function () {

  // load the service's module
  beforeEach(module('catalogApp'));

  // instantiate service
  var Catalogs;
  beforeEach(inject(function (_Catalogs_) {
    Catalogs = _Catalogs_;
  }));

  it('should do something', function () {
    expect(!!Catalogs).toBe(true);
  });

});
