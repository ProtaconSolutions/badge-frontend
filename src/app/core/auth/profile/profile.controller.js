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
   * @param {*} _profile
   * @constructor
   */
  function ProfileController(_user, _profile) {
    var vm = this;

    vm.user = _user;
    vm.profile = _profile.data;
  }
}());
