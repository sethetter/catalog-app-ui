'use strict';

angular.module('catalogApp')
  .controller('CatalogCtrl', ['$scope', 'Session', '$location', 'Catalogs',
    function ($scope, Session, $location, Catalogs) {

      //if (!Session.user) $location.path('/login');

      $scope.catalog = Catalogs.find();

    }]);
