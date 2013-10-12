'use strict';

angular.module( 'catalogApp' )
  .controller( 'CatalogCtrl', [ '$scope', 'Session', '$location', 'Catalogs',
  function( $scope, Session, $location, Catalogs ) {

    //if (!Session.user) $location.path('/login');
    Session.user = {
      "defaultCatalog": 0
    };

    Catalogs.find( Session.user.defaultCatalog ).then( function( catalog ) {

      $scope.catalog = catalog;

    } );

  }
] );
