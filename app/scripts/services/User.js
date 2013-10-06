angular.module('catalogApp')
  .service('User', function() {

    this.authenticate = function (username, password) {
      var user = _findByUsername(username);

      if (!user) {
        throw new Error("User not found");
      }

      if (user.password === password) return user;

      throw new Error("Incorrect password");
    };

    function _findByUsername (username) {
      var Users = [
        {
          username: "test1",
          password: "Password1"
        }
      ];

      for (var i = 0, len = Users.length; i < len; i++) {
        if (Users[i].username === username) return Users[i];
      }

      return false;
    }

  });
