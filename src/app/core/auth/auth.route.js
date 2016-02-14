(function() {
  'use strict';

  /**
   * Specify run block for badgeFrontend.core.auth module.
   *
   * @namespace Routes
   */
  angular
    .module('badgeFrontend.core.auth')
    .run(moduleRun);

  //////////

  /**
   * @desc      Run block for badgeFrontend.core.auth module.
   * @namespace Auth
   * @memberOf  Routes
   * @ngInject
   *
   * @param {Providers.RouterHelper}  routerHelper
   * @param {AccessLevels}            AccessLevels
   */
  function moduleRun(routerHelper, AccessLevels) {
    routerHelper.configureStates(getStates(AccessLevels));
  }

  /**
   * @name      getStates
   * @desc      Getter method for badgeFrontend.core.auth module route definitions.
   * @memberOf  Routes.Auth
   *
   * @returns {*[]}
   */
  function getStates(AccessLevels) {
    return [
      {
        state: 'auth',
        config: {
          abstract: true,
          parent: 'badgeFrontend',
          data: {
            access: AccessLevels.anon
          }
        }
      }
    ];
  }
})();
