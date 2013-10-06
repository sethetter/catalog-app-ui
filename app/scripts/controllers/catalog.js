'use strict';

angular.module('catalogApp')
  .controller('CatalogCtrl', ['$scope', 'Session', '$location',
    function ($scope, Session, $location) {
      if (!Session.user) $location.path('/login');
    }]);
