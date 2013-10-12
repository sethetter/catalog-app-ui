'use strict';

angular.module( 'catalogApp' )
  .service( 'Catalogs', [ '$http', 'Alerts', 'Session',
  function Catalogs( $http, Alerts, Session ) {
    var Catalogs = {};

    Catalogs.catalogs = [ ];

    Catalogs.find = function( id ) {
      $http.get( '/data/catalogs.json' ).success( function( data, status ) {

        Catalogs.catalogs = data.catalogs;

        return Catalogs.catalogs[ id ? id : Session.user.defaultCatalog ];

      } ).error( function( data, status ) {
        Alerts.add( 'danger', 'Error fetching catalog data' );
      } );
    }

    return Catalogs;
  }
] );
