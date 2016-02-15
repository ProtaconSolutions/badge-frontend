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
   * @param {*} $http
   * @param {*} $localStorage
   * @param {*} jwtHelper
   * @param {*} config
   * @returns {{
   *    user: Services.UserService.user,
   *    getProfile: Services.UserService.getProfile
   *  }}
   * @constructor
   */
  function UserService(
    $http, $localStorage,
    jwtHelper,
    config
  ) {
    return {
      user: user,
      getProfile: getProfile
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

    /**
     * @name      getProfile
     * @memberOf  Services.UserService
     *
     * @returns {*}
     */
    function getProfile() {
      return $http.get(config.backendUrl + 'auth/profile');
    }
  }
}());
