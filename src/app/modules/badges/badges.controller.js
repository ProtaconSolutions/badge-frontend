(function() {
  'use strict';

  /**
   * Specify controller for badgeFrontend.modules.badges module.
   *
   * @namespace Controllers
   */
  angular
    .module('badgeFrontend.modules.badges')
    .controller('BadgesController', BadgesController);

  //////////

  /**
   * @desc      Controller implementation for /badges route.
   * @namespace Badges
   * @memberOf  Controllers
   * @ngInject
   *
   * @constructor
   */
  function BadgesController(_badges) {
    var vm = this;

    // Store badges
    vm.badges = _badges.data;
  }
}());
