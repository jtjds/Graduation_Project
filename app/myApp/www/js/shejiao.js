//社交

angular.module('shejiao', [])

.controller('shejiaoCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location','$window' ,'$ionicHistory',function($scope, $ionicPopup, $timeout,$stateParams,$http,$ionicScrollDelegate,$location,$window,$ionicHistory){
    
    $scope.wopList = [
        {
        	"bookName":"JavaScipt高级程序设计",
        	"position":"2F14排第三本",
        	"date":"2017-03-11"
        },
         {
        	"bookName":"css的那些事",
        	"position":"2F14排第四本",
        	"date":"2017-03-11"
        },
         {
        	"bookName":"JavaScipt高级程序设计",
        	"position":"2F14排第三本",
        	"date":"2017-03-11"
        },
         {
        	"bookName":"JavaScipt高级程序设计",
        	"position":"2F14排第三本",
        	"date":"2017-03-11"
        }
    ];
  
}])