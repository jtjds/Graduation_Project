//新书推荐

angular.module('newBookRecommand', [])

.controller('newBookRecommandCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location','$window' ,'$ionicHistory',function($scope, $ionicPopup, $timeout,$stateParams,$http,$ionicScrollDelegate,$location,$window,$ionicHistory){
    
     //解决web浏览器只跟踪一个历史浏览记录
    $ionicHistory.nextViewOptions({
         disableBack: true
    });  
    
    $scope.recommandBookList = [
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