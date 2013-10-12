'use strict';

describe( 'Controller: CatalogCtrl', function( ) {

  // load the controller's module
  beforeEach( module( 'catalogApp' ) );

  var CatalogCtrl,
    httpBackend,
    scope;

  // Initialize the controller and a mock scope
  beforeEach( inject( function( $httpBackend, $controller, $rootScope ) {

    httpBackend = $httpBackend;

    $httpBackend.expect( 'GET', '/data/catalogs.json' ).respond( {
      "catalogs": [ {
          "name": "Testing Catalog",
          "items": [ {
              "name": "Item 1",
              "description": "A thing",
              "imageUrl": "..."
            }, {
              "name": "Item 2",
              "description": "A thing",
              "imageUrl": "..."
            }
          ]
        }
      ]
    } );

    scope = $rootScope.$new( );

    CatalogCtrl = $controller( 'CatalogCtrl', {
      $scope: scope
    } );

  } ) );

  it( "should have a catalog", function( ) {
    httpBackend.flush( );
    expect( scope.catalog ).toBeDefined( );
  } );

} );
