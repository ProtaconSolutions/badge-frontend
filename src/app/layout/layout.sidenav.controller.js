(function() {
  'use strict';

  /**
   * Specify controller for badgeFrontend.layout module.
   *
   * @namespace Controllers
   */
  angular
    .module('badgeFrontend.layout')
    .controller('SidenavController', SidenavController);

  //////////

  /**
   * @desc      Controller implementation.
   * @namespace Layout
   * @memberOf  Controllers
   * @ngInject
   *
   * @param {*} $mdSidenav
   * @constructor
   */
  function SidenavController($mdSidenav) {
    var vm = this;

    vm.contents = [
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'User data',
        items: [
          {
            title: 'My profile',
            state: 'auth.profile'
          },
          {
            title: 'My badges',
            state: ''
          },
          {
            title: 'My achievements',
            state: ''
          }
        ]
      },
      {
        title: 'Statistics',
        items: [
          {
            title: 'Badges',
            state: ''
          },
          {
            title: 'Achievements',
            state: ''
          }
        ]
      },
      {
        title: 'Administration',
        items: [
          {
            title: 'Badges',
            state: ''
          },
          {
            title: 'Achievements',
            state: ''
          }
        ]
      }
    ];

    // Functions
    vm.hideSideMenu = hideSideMenu;

    //////////

    // Method to close sidenav
    function hideSideMenu() {
      $mdSidenav('left').close();
    }
  }
})();
