(function() {
  'use strict';

  /**
   * Specify controller for badgeFrontend.core.auth.login module.
   *
   * @namespace Controllers
   */
  angular
    .module('badgeFrontend.core.auth.login')
    .controller('LoginController', LoginController);

  //////////

  /**
   * @desc      Controller implementation for /login route.
   * @namespace Login
   * @memberOf  Controllers
   * @ngInject
   *
   * @param   {$state}                $state
   * @param   {Services.AuthService}  AuthService
   * @constructor
   */
  function LoginController($state, AuthService) {
    var vm = this;

    // Already authenticated so redirect back to badges
    if (AuthService.isAuthenticated(true)) {
      $state.go('auth.profile');
    }

    // Expose functions
    vm.login = login;

    //////////

    // Function to perform actual login request to server
    function login() {
      AuthService
        .authenticate(vm.credentials)
        .then(onSuccess, onError);

      function onSuccess() {
        $state.go('auth.profile');
      }

      function onError() {
        _reset();
      }
    }

    ////////// Private functions

    // Initialize credentials
    function _reset() {
      vm.credentials = {
        identifier: '',
        password: ''
      };
    }

    _reset();
  }
}());
