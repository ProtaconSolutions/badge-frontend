(function() {
  'use strict';

  /**
   * @namespace   Services
   */
  angular
    .module('badgeFrontend.core.auth.services')
    .factory('AuthService', AuthService);

  //////////

  /**
   * @description AuthService.
   * @namespace   AuthService
   * @memberOf    Services
   * @ngInject
   *
   * @param {*}                           $http
   * @param {*}                           $state
   * @param {*}                           $localStorage
   * @param {*}                           jwtHelper
   * @param {Auth.Constants.AccessLevels} AccessLevels
   * @param {Constants.Config}            config
   * @returns {{
   *    authenticate:     Services.AuthService.authenticate,
   *    authorize:        Services.AuthService.authorize,
   *    isAuthenticated:  Services.AuthService.isAuthenticated,
   *    logout:           Services.AuthService.logout
   *  }}
   * @constructor
   */
  function AuthService(
    $http, $state, $localStorage,
    jwtHelper,
    AccessLevels, config
  ) {
    return {
      authenticate: authenticate,
      authorize: authorize,
      isAuthenticated: isAuthenticated,
      logout: logout
    };

    //////////

    /**
     * @name      authenticate
     * @memberOf  Services.AuthService
     *
     * @param     {*} credentials
     * @returns   {*}
     */
    function authenticate(credentials) {
      return $http
        .post(config.backendUrl + 'auth/login', credentials)
        .then(onSuccess);

      function onSuccess(response) {
        $localStorage.token = response.data;

        return response.data;
      }
    }

    /**
     * @name      authorize
     * @memberOf  Services.AuthService
     *
     * @param     {Number}  accessLevel
     * @returns   {boolean}
     */
    function authorize(accessLevel) {
      var _this = this;

      if (accessLevel === AccessLevels.anon) {
        return true;
      }

      if (accessLevel === AccessLevels.user) {
        return _this.isAuthenticated();
      }

      if (accessLevel === AccessLevels.admin) {
        if (!_this.isAuthenticated()) {
          return false;
        }

        console.warn('Check this implementation!');

        // Note this won't work atm.
        return jwtHelper.decodeToken($localStorage.token) === 'admin';
      }

      return false;
    }

    /**
     * @name      isAuthenticated
     * @memberOf  Services.AuthService
     *
     * @returns   {boolean}
     */
    function isAuthenticated(silent) {
      silent = silent || false;

      var token = $localStorage.token || '';

      try {
        return !jwtHelper.isTokenExpired(token);
      } catch(error) {
        if (!silent) {
          console.error('auth error!', error);
        }

        return false;
      }
    }

    /**
     * @name      logout
     * @memberOf  Services.AuthService
     */
    function logout() {
      $localStorage.$reset();

      $state.go('auth.login');
    }
  }
}());
