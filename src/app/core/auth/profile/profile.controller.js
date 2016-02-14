(function() {
  'use strict';

  /**
   * Specify controller for badgeFrontend.core.auth.profile module.
   *
   * @namespace Controllers
   */
  angular
    .module('badgeFrontend.core.auth.profile')
    .controller('ProfileController', ProfileController);

  //////////

  /**
   * @desc      Controller implementation for /profile route.
   * @namespace Profile
   * @memberOf  Controllers
   * @ngInject
   *
   * @param {*} _user
   * @constructor
   */
  function ProfileController(_user) {
    var vm = this;

    vm.user = _user;
  }
}());
