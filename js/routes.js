angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('mENU.nUBusTracking', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nUBusTracking.html',
        controller: 'nUBusTrackingCtrl'
      }
    }
  })

  .state('mENU.home', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('mENU.busDriver', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/busDriver.html',
        controller: 'busDriverCtrl'
      }
    }
  })

  .state('mENU.busDriver2', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/busDriver2.html',
        controller: 'busDriver2Ctrl'
      }
    }
  })

  .state('mENU.passenger', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/passenger.html',
        controller: 'passengerCtrl'
      }
    }
  })

  .state('mENU.map', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('mENU', {
    url: '/side-menu21',
    templateUrl: 'templates/mENU.html',
    controller: 'mENUCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});