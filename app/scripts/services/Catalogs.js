'use strict';

angular.module( 'catalogApp' )
  .service( 'Catalogs', [ '$http', 'Alerts', 'Session', '$q',
  function Catalogs( $http, Alerts, Session, $q ) {
    var Catalogs = {};

    Catalogs.catalogs = [ ];

    Catalogs.find = function( id ) {
      var deferred = $q.defer( );

      $http.get( '/data/catalogs.json' ).success( function( data, status ) {

        Catalogs.catalogs = data.catalogs;

        deferred.resolve( Catalogs.catalogs[ id ] );

      } ).error( function( data, status ) {
        Alerts.add( 'danger', 'Error fetching catalog data' );
      } );

      return deferred.promise;
    }

    return Catalogs;
  }
] );
