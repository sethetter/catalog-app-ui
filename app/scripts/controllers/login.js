'use strict';

angular.module('catalogApp')
  .controller('LoginCtrl', ['$scope', 'Alerts', 'User', 'Session', '$location',
    function ($scope, Alerts, User, Session, $location) {

      $scope.user = {
        "username": "",
        "password": ""
      };

      $scope.closeAlert = function (index) {
        Alerts.close(index);
      };

      $scope.authenticate = function () {
        Alerts.closeAll();
        try {
          var user = User.authenticate($scope.user.username, $scope.user.password);
          Session.user = user;
          $location.path('/');
          return;
        } catch (e) {
          Alerts.add("danger", e.message);
        }
      };

    }]);
