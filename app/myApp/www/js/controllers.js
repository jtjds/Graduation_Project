angular.module('starter.controllers', [])

.controller('AppCtrl',['$scope','$http', '$state','$location','$ionicModal', '$timeout','$ionicSlideBoxDelegate', function($scope,$http,$state, $location,$ionicModal, $timeout,$ionicSlideBoxDelegate) {
  // Form data for the login modal
  $scope.loginData = {};
  
  $scope.jump = function(url){
    window.location = url;
    window.location.reload();
  }

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
       $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
     // $scope.modal.show();
     // $location.path('#/app/login'); 
  };
  $scope.statusText = [
       {"status":0 ,"text":"请登录账号"},
       {"status":1 ,"text":"已登录"}
  ];

}])


.controller('PlaylistsCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location','$window' ,'$ionicHistory',function($scope, $ionicPopup, $timeout,$stateParams,$http,$ionicScrollDelegate,$location,$window,$ionicHistory) {
  
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  $scope.con_wx_wop = function(){
        var alertPopup = $ionicPopup.alert({
            template: "调起接口失败！"
        });
        // alertPopup.then(function(res) {
        //      window.location="#/app/playlists";
        // });   
  }
}])


