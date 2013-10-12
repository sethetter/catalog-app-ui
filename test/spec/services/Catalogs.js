'use strict';

describe( 'Service: Catalogs', function( ) {

  // load the service's module
  beforeEach( module( 'catalogApp' ) );

  // instantiate service
  var Catalogs;
  var Session;
  var httpBackend;

  beforeEach( inject( function( $httpBackend, _Catalogs_, _Session_ ) {

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
    Session = _Session_;

    Session.user = {
      defaultCatalog: 0
    };
  } ) );

  afterEach( function( ) {
    $httpBackend.verifyNoOutstandingExpectation( );
    $httpBackend.verifyNoOutstandingRequest( );
  } );

  it( 'should return user default catalog with no find argument', function( ) {
    var catalog = Catalogs.find( );
    httpBackend.flush( );

    // Does this need to be in a success callback for find? Or a promise?
    expect( catalog.name ).toBe( "Testing Catalog" );
  } );

} );
