'use strict';

describe('Service: User', function () {

  // load the service's module
  beforeEach(module('catalogApp'));

  // instantiate service
  var User;
  beforeEach(inject(function (_User_) {
    User = _User_;
  }));

  it('should authenticate a user', function () {
    var user = User.authenticate("test1", "Password1");
    expect(!!user).toBe(true);
  });

  it('should throw an error when user not found', function () {
    expect(function () {
      User.authenticate("test2", "Password1");
    }).toThrow(new Error("User not found"));
  });

  it('should throw an error when password is incorrect', function () {
    expect(function () {
      User.authenticate("test1", "Password2");
    }).toThrow(new Error("Incorrect password"));
  });

});
