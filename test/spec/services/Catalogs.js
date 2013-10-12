'use strict';

describe( 'Service: Catalogs', function( ) {

  // load the service's module
  beforeEach( module( 'catalogApp' ) );

  // instantiate service
  var Catalogs;
  var Session;
  var httpBackend;

  beforeEach( inject( function( $httpBackend, _Catalogs_ ) {

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

    Catalogs = _Catalogs_;

  } ) );

  afterEach( function( ) {
    httpBackend.verifyNoOutstandingExpectation( );
    httpBackend.verifyNoOutstandingRequest( );
  } );

  it( 'should return the specified catalog', function( ) {
    var catalog = Catalogs.find( 0 ).then( function ( catalog ) {
      expect( catalog.name ).toBe( "Testing Catalog" );
    } );

    httpBackend.flush( );
  } );

} );
