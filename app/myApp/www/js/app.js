// Ionic Starter App


angular.module('starter', ['ionic', 'starter.controllers','starter.login','starter.search','starter.personCenter','bookOrder','correct','messageForm','numberSource','newBookRecommand','shejiao','others','set','MyLibrary'])

.run(function($ionicPlatform,$rootScope,$state, $stateParams, $timeout) {
  $ionicPlatform.ready(function() { 
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  
    $rootScope.singleData =null;
    $rootScope.muliteData =null;

})



.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

 
    .state('app.LoginIn', {
    url: '/LoginIn',
    views: {
      'menuContent': {
       templateUrl: 'templates/LoginIn.html',
       controller:'LoginInCtrl'
      }
    }
  })
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
       templateUrl: 'templates/login.html',
       controller:'loginCtrl'
      }
    }
  })
  .state('app.MyLibrary', {
    url: '/MyLibrary',
    views: {
      'menuContent': {
       templateUrl: 'templates/MyLibrary.html',
       controller:'MyLibraryCtrl'
      }
    }
  })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    
    .state('app.library_search', {
      url: '/library_search',
      views: {
        'menuContent': {
          templateUrl: 'templates/library_search.html',
          controller: 'library_searchCtrl'
        }
      }
    })
    .state('app.personCenter', {
      url: '/personCenter',
      views: {
        'menuContent': {
          templateUrl: 'templates/personCenter.html',
          controller: 'personCenterCtrl'
        }
      }
    })
    .state('app.messageForm', {
      url: '/messageForm',
      views: {
        'menuContent': {
          templateUrl: 'templates/messageForm.html',
          controller: 'messageFormCtrl'
        }
      }
    })
    .state('app.numberSource', {
      url: '/numberSource',
      views: {
        'menuContent': {
          templateUrl: 'templates/numberSource.html',
          controller: 'numberSourceCtrl'
        }
      }
    }).state('app.bookOrder', {
      url: '/bookOrder',
      views: {
        'menuContent': {
          templateUrl: 'templates/bookOrder.html',
          controller: 'bookOrderCtrl'
        }
      }
    }).state('app.newBookRecommand', {
      url: '/newBookRecommand',
      views: {
        'menuContent': {
          templateUrl: 'templates/newBookRecommand.html',
          controller: 'newBookRecommandCtrl'
        }
      }
    }).state('app.shejiao', {
      url: '/shejiao',
      views: {
        'menuContent': {
          templateUrl: 'templates/shejiao.html',
          controller: 'shejiaoCtrl'
        }
      }
    }).state('app.others', {
      url: '/others',
      views: {
        'menuContent': {
          templateUrl: 'templates/others.html',
          controller: 'othersCtrl'
        }
      }
    }).state('app.set', {
      url: '/set',
      views: {
        'menuContent': {
          templateUrl: 'templates/set.html',
          controller: 'setCtrl'
        }
      }
    }).state('app.correct', {
      url: '/correct',
      views: {
        'menuContent': {
          templateUrl: 'templates/correct.html',
          controller: 'correctCtrl'
        }
      }
    })

 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');

});
