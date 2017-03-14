//数字资源

angular.module('numberSource', [])

.controller('numberSourceCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location','$window' ,'$ionicHistory','$ionicModal',function($scope, $ionicPopup,$timeout,$stateParams,$http,$ionicScrollDelegate,$location,$window,$ionicHistory,$ionicModal){
    
	$ionicModal.fromTemplateUrl('templates/numSou_model.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	  }).then(function(modal) {
	    $scope.modal = modal;
	  });
	$scope.openModal = function() {
	    $scope.modal.show();
	};
	$scope.closeModal = function() {
	    $scope.modal.hide();
	};
	 //当我们用到模型时，清除它！
    // $scope.$on('$destroy', function() {
    //     $scope.modal.remove();
    // });
    //  // 当隐藏的模型时执行动作
    // $scope.$on('modal.hide', function() {
    // // 执行动作
    // });
    // // 当移动模型时执行动作
    // $scope.$on('modal.removed', function() {
    //     // 执行动作
    // });

    $scope.messageList = [
        {
	    	"message":"所有应用",
	    	"text":"所用应用列表"
	    	
        },
        {
	    	"message":"热门报刊",
	    	"text":"热门报刊"
	    	
        },
         {
	    	"message":"头条",
	    	"text":"最新最全要闻频道，网络国际新闻，国内新闻"
        },
         {
	    	"message":"教育",
	    	"text":"集纳各类考试专题，教育资讯"
	    },
	    {
	    	"message":"科技",
	    	"text":"提供重要数码资讯，IT信息"
	    },
	    {
	    	"message":"财经",
	    	"text":"提供全天气候国内和世界财经新闻"
	    },
	    {
	    	"message":"文史",
	    	"text":"文史资料，文化热点"
	    },
	    {
	    	"message":"人文",
	    	"text":"提供文化新闻，读书信息的新闻频道"
	    },
	    {
	    	"message":"体育",
	    	"text":"网罗国际国内各种体育资讯"
	    },
	    {
	    	"message":"娱乐",
	    	"text":"实时传递娱乐八卦，影视动态"
	    },
	    {
	    	"message":"军事",
	    	"text":"第一时间发布全球军事动态"
	    },
	    {
	    	"message":"外文资讯",
	    	"text":"提供最新外文信息"
	    }
   ];


  
}])