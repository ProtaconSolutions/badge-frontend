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
   * @param {*}                     $localStorage
   * @param {Services.AuthService}  AuthService
   * @param {Services.UserService}  UserService
   * @constructor
   */
  function HeaderController(
    $scope, $localStorage,
    AuthService, UserService
  ) {
    var vm = this;

    // Functions
    vm.logout = logout;

    //////////

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
