'use strict';

angular.module( 'catalogApp', [ 'ui.bootstrap' ] )
  .config( function( $routeProvider ) {
  $routeProvider
  .when( '/', {
    templateUrl: 'views/catalog.html',
    controller: 'CatalogCtrl'
  } )
  .when( '/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  } )
  .when( '/submit', {
    templateUrl: 'views/submit.html',
    controller: 'SubmitCtrl'
  } )
  .when( '/:catalog/tag/:tag', {
    templateUrl: '/views/catalogTag.html',
    controller: 'CatalogTagCtrl'
  } )
  .otherwise( {
    redirectTo: '/'
  } );
} );
