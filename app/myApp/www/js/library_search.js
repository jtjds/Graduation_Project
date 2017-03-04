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

    
}])


       

