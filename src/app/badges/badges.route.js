(function() {
  'use strict';

  /**
   * Specify run block for badgeFrontend.badges module.
   *
   * @namespace Routes
   */
  angular
    .module('badgeFrontend.badges')
    .run(moduleRun);

  //////////

  /**
   * @desc      Run block for badgeFrontend.badges module.
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
        state: 'badges',
        config: {
          url: '/badges',
          parent: 'badgeFrontend',
          data: {
            access: AccessLevels.user
          },
          views: {
            'content@': {
              templateUrl: '/badge-frontend/badges/badges.html',
              controller: 'BadgesController',
              controllerAs: 'vm'
            }
          }
        }
      }
    ];
  }
}());
