angular
  .module('bachelorsApp')
  .service('UserService', function ($mdDialog) {
    this.validateUser = validateUser;

    function validateUser(user) {
      var result;
      result = checkFields(user) && checkPasswords(user.password, user.passwordAgain);
      return result;
    }

    function checkFields(user) {
      var result = true;
      if (user) {
        if (!user.userName) {
          result = false;
        }
        if (!user.email) {
          result = false;
        }
        if (!user.password) {
          result = false;
        }
        if (!user.passwordAgain) {
          result = false;
        }
      } else {
        result = false;
      }

      if (!result) {
        $mdDialog.show(
          $mdDialog.error().locals({
            error: 'All of fields are required!'
          })
        );
      }

      return result;
    }

    function checkPasswords(password1, password2) {
      if (password1 !== password2) {
        $mdDialog.show(
          $mdDialog.error().locals({
            error: 'Passwords are not the same!'
          })
        );
        return false;
      }
      return true;
    }
  });