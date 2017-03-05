//馆藏查询

angular.module('starter.search', [])

.controller('library_searchCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location','$window' ,'$ionicHistory',function($scope, $ionicPopup, $timeout,$stateParams,$http,$ionicScrollDelegate,$location,$window,$ionicHistory){
    //console.log('33333');
    $scope.search = function(){
    	console.log('jtt');
    };

    //请求数据
    $http({  
            url : "../data/library_search.json",  
            method : "get"         
           // headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }

        }).success(function(data) { 
            $scope.data =  data;
        
        })
    $scope.showDetail = function($index){
 
            var alertPopup = $ionicPopup.alert({
		       title: '展示详情',
		       template: '<span style="color:#666;margin-right:5px;">书名:</span>' + $scope.data[$index].bookName+'<br>'
		         + '<span style="color:#666;margin-right:5px;">馆藏数:</span>' + $scope.data[$index].markNumber+'<br>'
		         + '<span style="color:#666;margin-right:5px;">作者:</span>' + $scope.data[$index].author+'<br>'
		         + '<span style="color:#666;margin-right:5px;">页数:</span>' + $scope.data[$index].pageNumber+'<br>'
		         + '<span style="color:#666;margin-right:5px;">出版社:</span>' + $scope.data[$index].chubanshe+'<br>'
		         + '<span style="color:#666;margin-right:5px;">出版日期:</span>' + $scope.data[$index].date+'<br>'
		         + '<span style="color:#666;margin-right:5px;">ISBN:</span>' + $scope.data[$index].ISBN+'<br>'
	        });       
    	
    }
    
}])


       

