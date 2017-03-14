//消息通知


angular.module('messageForm', [])

.controller('messageFormCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location','$window' ,'$ionicHistory',function($scope, $ionicPopup, $timeout,$stateParams,$http,$ionicScrollDelegate,$location,$window,$ionicHistory){
    
   $scope.messageList = [
         {
	    	"message":"婷风",
	    	"text":"您好 ，有新书上架哦！",
	    	"isChecked":true,
	    	"date":"2017-03-13"
        },
        {
	    	"message":"婷风",
	    	"text":"您好 ，有新书上架哦！",
	    	"isChecked":true,
	    	"date":"2017-03-12"
        },
        {
	    	"message":"婷风",
	    	"text":"您好 ，有新书上架哦！",
	    	"isChecked":true,
	    	"date":"2017-03-11"
        },
         {
	    	"message":"婷风",
	    	"text":"您好 ，有新书上架哦！",
	    	"isChecked":false,
	    	"date":"2017-03-08"
        },
         {
	    	"message":"婷风",
	    	"text":"您好 ，距离您还书的日期还剩下2天，请尽快查阅哦！",
	    	"isChecked":false,
	    	"date":"2017-02-15"
	    },
	    {
	    	"message":"婷风",
	    	"text":"您好 ，距离您还书的日期还剩下3天，请尽快查阅哦！",
	    	"isChecked":true,
	    	"date":"2017-02-14"
	    }
   ];
  
}])


       

