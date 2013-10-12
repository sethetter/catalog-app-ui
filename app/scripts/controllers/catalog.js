'use strict';

angular.module( 'catalogApp' )
  .controller( 'CatalogCtrl', [ '$scope', '$timeout', 'Session', '$location', 'Catalogs',
  function( $scope, $timeout, Session, $location, Catalogs ) {

    if (!Session.user) $location.path('/login');

    Session.user = {
      "defaultCatalog": 0
    };

    Catalogs.find( Session.user.defaultCatalog ).then( function( catalog ) {
      $scope.catalog = catalog;
    } );;

  }
] );
