//图书预订

angular.module('bookOrder', [])

.controller('bookOrderCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location','$window' ,'$ionicHistory',function($scope, $ionicPopup, $timeout,$stateParams,$http,$ionicScrollDelegate,$location,$window,$ionicHistory){
    
    $scope.data = {
        showDelete: false
    };
  
  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
 
   $scope.submit_order = function(){
   	  // console.log('333');
        var alertPopup = $ionicPopup.alert({
            template: "订约成功，请尽快前往图书馆取书！"
        });
        alertPopup.then(function(res) {
             window.location="#/app/playlists";
        });      
   }

  $scope.items = [
      {
      	"img":"../img/ajaxwqsc.jpg",
      	"bookName":"javaScript高级教程",
      	"bookAuthor":"李松峰",
      	"chubanshe":"上海电子科技出版社"
      },{
      	"img":"../img/angularjskfxyd.jpg",
      	"bookName":"javaScript高级教程",
      	"bookAuthor":"李松峰",
      	"chubanshe":"上海电子科技出版社"
      },{
      	"img":"../img/bxgzldm.jpg",
      	"bookName":"javaScript高级教程",
      	"bookAuthor":"李松峰",
      	"chubanshe":"上海电子科技出版社"
      },{
      	"img":"../img/ajaxwqsc.jpg",
      	"bookName":"javaScript高级教程",
      	"bookAuthor":"李松峰",
      	"chubanshe":"上海电子科技出版社"
      },{
      	"img":"../img/bxgzldm.jpg",
      	"bookName":"javaScript高级教程",
      	"bookAuthor":"李松峰",
      	"chubanshe":"上海电子科技出版社"
      },{
      	"img":"../img/angularjskfxyd.jpg",
      	"bookName":"javaScript高级教程",
      	"bookAuthor":"李松峰",
      	"chubanshe":"上海电子科技出版社"
      }
  ];
  
}])