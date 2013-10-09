'use strict';

describe('Service: Alerts', function () {

  // load the service's module
  beforeEach(module('catalogApp'));

  // instantiate service
  var Alerts;
  var $rootScope;
  beforeEach(inject(function (_$rootScope_, _Alerts_) {
    Alerts = _Alerts_;
    $rootScope = _$rootScope_;
  }));

  it('should place an empty alerts array on $rootScope', function () {
    expect($rootScope.alerts).toEqual([]);
    expect($rootScope.alerts.length).toBe(0);
  });

  describe('with one alert', function () {
    beforeEach(function () {
      Alerts.add('error', 'This is an error message');
      Alerts.add('notice', 'This is a notice message');
    });

    it('should add an alert', function () {
      expect($rootScope.alerts.length).toBe(2);
      expect($rootScope.alerts[0].type).toBe('error');
      expect($rootScope.alerts[0].msg).toBe('This is an error message');
    });

    it('should remove alert at given index', function () {
      Alerts.close(0);
      expect($rootScope.alerts.length).toBe(1);
    });

    it ('should remove all alerts', function () {
      Alerts.add('error', 'This is an error message');
      Alerts.closeAll();
      expect($rootScope.alerts.length).toBe(0);
    });
  });

});
