(function() {
  'use strict';

  /**
   * Specify run block for badgeFrontend.core.auth.login module.
   *
   * @namespace Routes
   */
  angular
    .module('badgeFrontend.core.auth.login')
    .run(moduleRun);

  //////////

  /**
   * @desc      Run block for badgeFrontend.core.auth.login module.
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
   * @desc      Getter method for badgeFrontend.core.auth.login module route definitions.
   * @memberOf  Routes.Auth
   *
   * @returns {*[]}
   */
  function getStates(AccessLevels) {
    return [
      {
        state: 'auth.login',
        config: {
          url: '/login',
          title: 'Login',
          data: {
            access: AccessLevels.anon
          },
          views: {
            'content@': {
              templateUrl: '/badge-frontend/core/auth/login/login.html',
              controller: 'LoginController',
              controllerAs: 'vm'
            }
          }
        }
      }
    ];
  }
}());
