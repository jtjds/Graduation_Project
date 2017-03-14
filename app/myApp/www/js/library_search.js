//馆藏查询

angular.module('starter.search', [])

.controller('library_searchCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location','$window' ,'$ionicHistory',function($scope, $ionicPopup, $timeout,$stateParams,$http,$ionicScrollDelegate,$location,$window,$ionicHistory){
    //console.log('33333');
    /*
       用户进行查询搜索图书,可查看详情,加入图书，进行预约图书清算,确定预约，预约成功！

     */
    
     //请求数据
    $http({  
            url : "../data/library_search.json",  
            method : "get"         
          //headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
        }).success(function(data) { 
            $scope.data =  data;        
        })
    $scope.addBookList = [];
    window._addBookList  = [];
    $scope.addCurrentBook = function($index){
        for(var i=0;i< $scope.data.length;i++){
            if(i == $index){
               window._addBookList.push(
                  {
                     "img":$scope.data[$index].img,
                     "bookName":$scope.data[$index].bookName,
                     "author":$scope.data[$index].author,
                     "chubanshe":$scope.data[$index].chubanshe
                  }
              );
            }
        }       
        //window._addBookList  =  $scope.addBookList;
        console.log(window._addBookList );
        var confirmPopup = $ionicPopup.confirm({
           title: '加入图书',
           template: '是否加入预约书库?'
         });
         confirmPopup.then(function(res) {
           if(res) {
            //加入预约书库，进行预约步骤
                var confirmPopup = $ionicPopup.confirm({
                   title: '进入书库',
                   template: '是否立即进行预约清算?'
                });
                confirmPopup.then(function(res) {
                    if(res) {
                        window.location = "#/app/bookOrder";
                        console.log('You are sure');
                    }else{

                    }
                })           
           } else {
             console.log('You are not sure');
           }
         });
    	console.log('index:' + $index);
    };

   
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


       

