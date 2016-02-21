(function() {
  'use strict';

  /**
   * Specify run block for badgeFrontend.modules.badges module.
   *
   * @namespace Routes
   */
  angular
    .module('badgeFrontend.modules.badges')
    .run(moduleRun);

  //////////

  /**
   * @desc      Run block for badgeFrontend.modules.badges module.
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
   * @desc      Getter method for badgeFrontend.modules.badge module route definitions.
   * @memberOf  Routes.Auth
   *
   * @returns {*[]}
   */
  function getStates(AccessLevels) {
    return [
      {
        state: 'modules.badges',
        config: {
          url: '/badges',
          title: 'Badges',
          data: {
            access: AccessLevels.user
          },
          views: {
            'content@': {
              templateUrl: '/badge-frontend/modules/badges/badges.html',
              controller: 'BadgesController',
              controllerAs: 'vm',
              resolve: {
                _badges: _badges
              }
            }
          }
        }
      }
    ];
  }

  //////////

  /**
   * @ngInject
   *
   * @param {Services.BadgeService} BadgeService
   * @returns {*}
   * @private
   */
  function _badges(BadgeService) {
    return BadgeService.find();
  }
}());
