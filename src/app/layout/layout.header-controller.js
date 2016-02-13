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
   * @param {ui.router.state.$state}  $state
   * @constructor
   */
  function HeaderController($state) {
    var vm = this;

    /**
     * Method to make logout action.
     *
     * @param {Event} $event
     */
    vm.logout = function logout($event) {
      $event.preventDefault();
      $event.stopPropagation();
    };
  }
})();
