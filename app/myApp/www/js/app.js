// Ionic Starter App


angular.module('starter', ['ionic', 'starter.controllers','login'])

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

  .state('app.search', {
    url: '/personCenter',
    views: {
      'menuContent': {
        templateUrl: 'templates/personCenter.html',
        controller:'personCenterCtrl'
      }
    }
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

   .state('app.aboutUs', {
    url: '/aboutUs',
    views: {
      'menuContent': {
        templateUrl: 'templates/aboutUs.html'
      }
    }
  })

    .state('app.personInfo', {
    url: '/personInfo',
    views: {
      'menuContent': {
        templateUrl: 'templates/personInfo.html'
      }
    }
  })

    .state('app.recommand', {
    url: '/recommand',
    views: {
      'menuContent': {
        templateUrl: 'templates/recommand.html',
        controller:'recommandCtrl'
      }
    }
  })

  .state('app.paihangbang', {
    url: '/paihangbang',
    views: {
      'menuContent': {
        templateUrl: 'templates/paihangbang.html',
        controller:'paihangbangCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
          controller:'browseCtrl'
        }
      }
    })

   .state('app.moreQuestion', {
      url: '/moreQuestion',
      views: {
        'menuContent': {
          templateUrl: 'templates/moreQuestion.html',
          controller:'moreQuestionCtrl'
        }
      }
    })
    .state('app.answerQuestion', {
      url: '/answerQuestion',
      views: {
        'menuContent': {
          templateUrl: 'templates/answerQuestion.html',
          controller:'answerQuestionCtrl'
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

    .state('app.timuList', {
        url: '/timuList/:timuId',
        views: {
          'menuContent': {
            templateUrl: 'templates/timuList.html',
            controller:'timuListCtrl'
          }
        }
    })

    .state('app.listItem', {
        url: '/listItem/:timuId',
        views: {
          'menuContent': {
            templateUrl: 'templates/listItem.html',
            controller:'listItemCtrl'
          }
        }
    })

      .state('app.timuListAnswerQuestion', {
        url: '/timuListAnswerQuestion/:timuId',
        views: {
          'menuContent': {
            templateUrl: 'templates/timuListAnswerQuestion.html',
            controller:'timuListAnswerQuestionCtrl'
          }
        }
    })
        .state('app.timuListMore', {
        url: '/timuListMore/:timuId',
        views: {
          'menuContent': {
            templateUrl: 'templates/timuListMore.html',
            controller:'timuListMoreCtrl'
          }
        }
    })

    .state('app.choose', {
        url: '/choose/:timuId',
        views: {
           'menuContent': {
            templateUrl: 'templates/choose.html',
            controller:'chooseCtrl'          
          }
        }
    })

  .state('app.set', {
    url: '/set',
    views: {
      'menuContent': {
        templateUrl: 'templates/set.html',
        controller:'setCtrl'
       
      }
    }


  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
