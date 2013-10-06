'use strict';

angular.module('catalogApp')
  .service('Alerts', ['$rootScope', function Alerts($rootScope) {
    var Alerts = {};

    $rootScope.alerts = [];

    Alerts.add = function (type, msg) {
      $rootScope.alerts.push({ type: type, msg: msg });
    };

    Alerts.close = function (index) {
      $rootScope.alerts.splice(index, 1);
    };

    Alerts.closeAll = function () {
      $rootScope.alerts = [];
    };

    return Alerts;
  }]);
