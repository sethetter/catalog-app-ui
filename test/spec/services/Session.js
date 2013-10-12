'use strict';

describe( 'Service: Session', function( ) {

  // load the service's module
  beforeEach( module( 'catalogApp' ) );

  // instantiate service
  var Session;
  beforeEach( inject( function( _Session_ ) {
    Session = _Session_;
  } ) );

  it( 'should have a null user initially', function( ) {
    expect( Session.user ).toBe( null );
  } );

} );
