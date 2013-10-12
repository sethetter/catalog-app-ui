'use strict';

angular.module( 'catalogApp' )
  .controller( 'CatalogCtrl', [ '$scope', 'Session', '$location', 'Catalogs',
  function( $scope, Session, $location, Catalogs ) {

    //if (!Session.user) $location.path('/login');

    Catalogs.find( Session.user.defaultCatalog ).then( function( catalog ) {

      $scope.catalog = catalog;

    } );

  }
] );
