(function() {
  'use strict';

  /**
   * Specify controller for badgeFrontend.layout module.
   *
   * @namespace Controllers
   */
  angular
    .module('badgeFrontend.layout')
    .controller('HeaderController', HeaderController);

  //////////

  /**
   * @desc      Controller implementation.
   * @namespace Layout
   * @memberOf  Controllers
   * @ngInject
   *
   * @param {*}                     $scope
   * @param {*}                     $state
   * @param {*}                     $localStorage
   * @param {Services.AuthService}  AuthService
   * @param {Services.UserService}  UserService
   * @constructor
   */
  function HeaderController(
    $scope, $state, $localStorage,
    AuthService, UserService
  ) {
    var vm = this;

    // Functions
    vm.profile = profile;
    vm.logout = logout;

    //////////

    /**
     * Method to redirect user to his/hers profile page.
     *
     * @param {Event} $event
     */
    function profile($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $state.go('auth.profile');
    }

    /**
     * Method to make logout action.
     *
     * @param {Event} $event
     */
    function logout($event) {
      $event.preventDefault();
      $event.stopPropagation();

      AuthService.logout();
    }

    $scope.$watch(function() {
      return angular.toJson($localStorage);
    }, function() {
      vm.user = UserService.user();
    });
  }
})();
