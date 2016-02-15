(function() {
  'use strict';

  /**
   * Specify controller for badgeFrontend.layout module.
   *
   * @namespace Controllers
   */
  angular
    .module('badgeFrontend.layout')
    .controller('SidenavController', SidenavController);

  //////////

  /**
   * @desc      Controller implementation.
   * @namespace Layout
   * @memberOf  Controllers
   * @ngInject
   *
   * @param {*}                     $scope
   * @param {*}                     $localStorage
   * @param {Services.UserService}  UserService
   * @constructor
   */
  function SidenavController(
    $scope, $localStorage,
    UserService
  ) {
    var vm = this;

    //////////

    $scope.$watch(function() {
      return angular.toJson($localStorage);
    }, function() {
      vm.user = UserService.user();
    });
  }
})();
