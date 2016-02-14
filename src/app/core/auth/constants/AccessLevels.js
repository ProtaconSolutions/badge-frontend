(function() {
  'use strict';

  /**
   * Frontend application access level constant definitions. These are used to to restrict access to certain routes in
   * application.
   *
   * Note that actual access check is done by currently signed in user.
   *
   * @namespace Constants
   * @memberOf  Auth
   */
  angular
    .module('badgeFrontend.core.auth.constants')
    .constant('AccessLevels', {
      anon: 0,
      user: 1,
      admin: 2
    });
}());
