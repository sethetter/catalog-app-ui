'use strict';

angular.module( 'catalogApp' )
  .controller( 'CatalogTagCtrl', [ '$scope', '$routeParams', 'Session', 'Catalogs',
  function( $scope ) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
  }
] );
