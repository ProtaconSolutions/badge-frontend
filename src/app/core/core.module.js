(function() {
  'use strict';

  /**
   * Initialization of badgeFrontend.core module.
   *
   * @namespace Modules
   */
  angular
    .module('badgeFrontend.core', [
      'ngAnimate', 'ngMaterial', 'ngMessages', 'ngSanitize', 'ngStorage',
      'ui.router',
      'angular-jwt',
      'badge-frontend-templates',
      'blocks.exception', 'blocks.logger', 'blocks.router'
    ]);
})();
