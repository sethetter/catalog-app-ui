'use strict';

angular.module( 'catalogApp' )
  .controller( 'CatalogCtrl', [ '$scope', '$timeout', 'Session', '$location', 'Catalogs',
  function( $scope, $timeout, Session, $location, Catalogs ) {

    //if (!Session.user) $location.path('/login');

    Session.user = {
      "defaultCatalog": 0
    };

    Catalogs.find( Session.user.defaultCatalog ).then( function( catalog ) {
      $scope.catalog = catalog;
      var allTags = [ ];

      for ( var i = 0; i < catalog.items.length; i++ ) {
        for ( var j = 0; j < catalog.items[ i ].tags.length; j++ ) {
          allTags.push( catalog.items[ i ].tags[ j ] );
        }
      }

      $scope.tags = getUniqueTags( allTags );
    } );

    var getUniqueTags = function( tags ) {
      var result = [ ];

      for ( var i = 0, len = tags.length; i < len; i++ ) {
        if ( result.indexOf( tags[ i ] ) === -1 ) {
          result.push( tags[ i ] );
        }
      }

      return result;
    };

  }
] );
