//收藏

angular.module('correct', [])

.controller('correctCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location','$window' ,'$ionicHistory',function($scope, $ionicPopup, $timeout,$stateParams,$http,$ionicScrollDelegate,$location,$window,$ionicHistory){
    
   //li的图书资源
   $scope.bookList = [
      {
      	"url":"http://www.linqing07.com/images/books/cssnxs.jpg",
      	"alt":"css那些事,web前端",
      	"link":"https://pan.baidu.com/s/1slCUDBJ"
      },{
      	"url":"http://www.linqing07.com/images/books/bxkwhjs.jpg",
      	"alt":"css那些事,web前端",
      	"link":"https://pan.baidu.com/s/1slCUDBJ"
      },{
      	"url":"http://www.linqing07.com/images/books/angularjskfxyd.jpg",
      	"alt":"css那些事,web前端",
      	"link":"https://pan.baidu.com/s/1slCUDBJ"
      },{
      	"url":"http://www.linqing07.com/images/books/bxgzldm.jpg",
      	"alt":"css那些事,web前端",
      	"link":"https://pan.baidu.com/s/1slCUDBJ"
      },{
      	"url":"http://www.linqing07.com/images/books/csssybjzd.jpg",
      	"alt":"css那些事,web前端",
      	"link":"https://pan.baidu.com/s/1slCUDBJ"
      },{
      	"url":"http://www.linqing07.com/images/books/csswebsjgjjc.jpg",
      	"alt":"css那些事,web前端",
      	"link":"https://pan.baidu.com/s/1slCUDBJ"
      },{
      	"url":"http://www.linqing07.com/images/books/jqjcjc.jpg",
      	"alt":"css那些事,web前端",
      	"link":"https://pan.baidu.com/s/1slCUDBJ"
      },{
      	"url":"http://www.linqing07.com/images/books/dynamichtml.jpg",
      	"alt":"css那些事,web前端",
      	"link":"https://pan.baidu.com/s/1slCUDBJ"
      },{
      	"url":"http://www.linqing07.com/images/books/fldjq.jpg",
      	"alt":"css那些事,web前端",
      	"link":"https://pan.baidu.com/s/1slCUDBJ"
      }
      // },{
      // 	"url":"http://www.linqing07.com/images/books/gxnwz.jpg",
      // 	"alt":"css那些事,web前端",
      // 	"link":"https://pan.baidu.com/s/1slCUDBJ"
      // }
      // },{
      // 	"url":"http://www.linqing07.com/images/books/html5gjcxsj.jpg",
      // 	"alt":"css那些事,web前端",
      // 	"link":"https://pan.baidu.com/s/1slCUDBJ"
      // },{
      // 	"url":"http://www.linqing07.com/images/books/html5yd.jpg",
      // 	"alt":"css那些事,web前端",
      // 	"link":"https://pan.baidu.com/s/1slCUDBJ"
      // },{
      // 	"url":"http://www.linqing07.com/images/books/jqsz.jpg",
      // 	"alt":"css那些事,web前端",
      // 	"link":"https://pan.baidu.com/s/1slCUDBJ"
      // },{
      // 	"url":"http://www.linqing07.com/images/books/jsdombcys.jpg",
      // 	"alt":"css那些事,web前端",
      // 	"link":"https://pan.baidu.com/s/1slCUDBJ"
      // },{
      // 	"url":"http://www.linqing07.com/images/books/jsgjcxsj.jpg",
      // 	"alt":"css那些事,web前端",
      // 	"link":"https://pan.baidu.com/s/1slCUDBJ"
      // }
   ];

    //解决web浏览器只跟踪一个历史浏览记录
    $ionicHistory.nextViewOptions({
         disableBack: true
    });  
  
}])