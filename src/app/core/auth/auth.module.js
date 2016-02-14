(function() {
  'use strict';

  /**
   * Initialization of badgeFrontend.core.auth module.
   *
   * @namespace Modules
   */
  angular
    .module('badgeFrontend.core.auth', [
      'badgeFrontend.core.auth.constants',
      'badgeFrontend.core.auth.login',
      'badgeFrontend.core.auth.services'
    ]);
}());
