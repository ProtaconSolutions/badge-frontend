(function() {
  'use strict';

  /**
   * Specify controller for badgeFrontend.modules.badges module.
   *
   * @namespace Controllers
   */
  angular
    .module('badgeFrontend.modules.badges')
    .controller('BadgesController', BadgesController);

  //////////

  /**
   * @desc      Controller implementation for /badges route.
   * @namespace Badges
   * @memberOf  Controllers
   * @ngInject
   *
   * @constructor
   */
  function BadgesController(
    config,
    _badges
  ) {
    var vm = this;

    // Store badges
    vm.badges = _badges.data;

    // Functions
    vm.getImageUrl = getImageUrl;

    //////////

    /**
     * Function to get image URL. Note that images are hosted from backend server.
     *
     * @param {*} image
     * @returns {string}
     */
    function getImageUrl(image) {
      return image ? config.backendUrl + 'image/show/' + image.hash : null;
    }
  }
}());
