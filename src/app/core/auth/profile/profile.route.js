(function() {
  'use strict';

  /**
   * Specify run block for badgeFrontend.core.auth.profile module.
   *
   * @namespace Routes
   */
  angular
    .module('badgeFrontend.core.auth.profile')
    .run(moduleRun);

  //////////

  /**
   * @desc      Run block for badgeFrontend.core.auth.profile module.
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
   * @desc      Getter method for badgeFrontend.core.auth.profile module route definitions.
   * @memberOf  Routes.Auth
   *
   * @returns {*[]}
   */
  function getStates(AccessLevels) {
    return [
      {
        state: 'auth.profile',
        config: {
          url: '/profile',
          title: 'Profile',
          data: {
            access: AccessLevels.user
          },
          views: {
            'content@': {
              templateUrl: '/badge-frontend/core/auth/profile/profile.html',
              controller: 'ProfileController',
              controllerAs: 'vm',
              resolve: {
                _user: _user,
                _profile: _profile
              }
            }
          }
        }
      }
    ];
  }

  /**
   * @ngInject
   *
   * @param UserService
   * @returns {*}
   * @private
   */
  function _user(UserService) {
    return UserService.user();
  }

  /**
   * @ngInject
   *
   * @param UserService
   * @returns {*}
   * @private
   */
  function _profile(UserService) {
    return UserService.getProfile();
  }
}());
