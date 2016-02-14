(function() {
  'use strict';

  /**
   * Specify controller for badgeFrontend.badges module.
   *
   * @namespace Controllers
   */
  angular
    .module('badgeFrontend.badges')
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
  function BadgesController() {}
}());
