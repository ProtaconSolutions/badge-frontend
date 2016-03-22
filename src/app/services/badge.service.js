(function() {
  'use strict';

  /**
   * @namespace   Services
   */
  angular
    .module('badgeFrontend.services')
    .factory('BadgeService', BadgeService);

  //////////

  /**
   * @description BadgeService
   * @namespace   BadgeService
   * @memberOf    Services
   * @ngInject
   *
   * @param {*} $http
   * @param {*} $httpParamSerializer
   * @param {*} config
   * @returns {{
   *    find: Services.BadgeService.find,
   *    findOne: Services.BadgeService.findOne,
   *    create: Services.BadgeService.create,
   *    update: Services.BadgeService.update,
   *    remove: Services.BadgeService.remove
   *  }}
   * @constructor
   */
  function BadgeService(
    $http, $httpParamSerializer,
    config
  ) {
    return {
      find: find,
      findOne: findOne,
      create: create,
      update: update,
      remove: remove
    };

    //////////

    /**
     * @name      find
     * @memberOf  Services.BadgeService
     *
     * @returns {*}
     */
    function find(params) {
      params = params || {};

      var query = $httpParamSerializer(params);

      return $http.get(_getUrl() + (query ? '?' + query : ''));
    }

    /**
     * @name      findOne
     * @memberOf  Services.BadgeService
     *
     * @param {number}  id
     * @returns {*}
     */
    function findOne(id) {
      return $http.get(_getUrl(id));
    }

    /**
     * @name      create
     * @memberOf  Services.BadgeService
     *
     * @param {{}}  data
     * @returns {*}
     */
    function create(data) {
      return $http.post(_getUrl(), data);
    }

    /**
     * @name      update
     * @memberOf  Services.BadgeService
     *
     * @param {number}  id
     * @param {{}}      data
     * @returns {*}
     */
    function update(id, data) {
      return $http.put(_getUrl(id), data);
    }

    /**
     * @name      remove
     * @memberOf  Services.BadgeService
     *
     * @param {number}  id
     * @returns {*|boolean}
     */
    function remove(id) {
      return $http.delete(_getUrl(id));
    }

    ////////// Private

    /**
     * Helper function to return backend url end point for this service.
     *
     * @param {string|number} [suffix]
     * @returns {string}
     * @private
     */
    function _getUrl(suffix) {
      suffix = suffix || '';

      return config.backendUrl + 'badge/' + suffix;
    }
  }
})();
