(function() {
  'use strict';

  /**
   * @namespace   Services
   */
  angular
    .module('badgeFrontend.core.auth.services')
    .factory('UserService', UserService);

  //////////

  /**
   * @description UserService.
   * @namespace   UserService
   * @memberOf    Services
   * @ngInject
   *
   * @param {*} $localStorage
   * @param {*} jwtHelper
   * @returns {{
   *    user: Services.UserService.user
   *  }}
   * @constructor
   */
  function UserService(
    $localStorage,
    jwtHelper
  ) {
    return {
      user: user
    };

    //////////

    /**
     * @name      user
     * @memberOf  Services.UserService
     *
     * @returns   {*}
     */
    function user() {
      return $localStorage.token ? jwtHelper.decodeToken($localStorage.token) : false;
    }
  }
}());
