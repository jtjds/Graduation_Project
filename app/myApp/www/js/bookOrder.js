//图书预订

angular.module('bookOrder', [])

.controller('bookOrderCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location','$window' ,'$ionicHistory',function($scope, $ionicPopup, $timeout,$stateParams,$http,$ionicScrollDelegate,$location,$window,$ionicHistory){
    
    $scope.data = {
        showDelete: false
    };
      //解决web浏览器只跟踪一个历史浏览记录
    // $ionicHistory.nextViewOptions({
    //      disableBack: true
    // });  
  
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
  $scope.checkedBook = [];
  $scope.chooseAll = function(){
      var eles  = document.getElementsByName('checkbox');
      var all = document.getElementById('checkbox_all');
      if(all.checked == true){
          for(var i=0;i<eles.length;i++){
              eles[i].checked = true;
              if(eles[i].checked == true){
                  $scope.checkedBook.push(eles[i]);
              }
          }
      }else{
           for(var i=0;i<eles.length;i++){
              eles[i].checked = false;
          }
      }
     console.log($scope.checkedBook.length);
  }
  var getCheckedNum = function(){
          var eles  = document.getElementsByName('checkbox');
          var num = 0;
          for(var i=0;i<eles.length;i++){
              if(eles[i].checked == true){
                    num++;
              }
          }
          return num;
  }; 
   $scope.submit_order = function(){
      //console.log($scope.checkedBook.length);
   	  // console.log('333');
      //选中已经选择的图书
      
        console.log('num:' + getCheckedNum());
        var alertPopup = $ionicPopup.alert({
            template: "您已预订" +getCheckedNum() + "本图书，请尽快前往图书馆取书！"
        });
        alertPopup.then(function(res) {
             window.location="#/app/playlists";
        });      
   }
   // $scope.items =  [
   //    // {
   //    //  "img":"../img/ajaxwqsc.jpg",
   //    //  "bookName":"javaScript高级教程",
   //    //  "author":"李松峰",
   //    //  "chubanshe":"上海电子科技出版社"
   //    // }
   // ];
    //$scope.items  = window._addBookList
    //console.log(window._addBookList );
   //$scope.items.push(window._addBookList);
  

  $scope.items = [
      {
      	"img":"../img/ajaxwqsc.jpg",
      	"bookName":"javaScript高级教程",
      	"author":"李松峰",
      	"chubanshe":"上海电子科技出版社"
      },{
      	"img":"../img/angularjskfxyd.jpg",
      	"bookName":"javaScript高级教程",
      	"author":"李松峰",
      	"chubanshe":"上海电子科技出版社"
      },{
      	"img":"../img/bxgzldm.jpg",
      	"bookName":"javaScript高级教程",
      	"author":"李松峰",
      	"chubanshe":"上海电子科技出版社"
      },{
      	"img":"../img/ajaxwqsc.jpg",
      	"bookName":"javaScript高级教程",
      	"author":"李松峰",
      	"chubanshe":"上海电子科技出版社"
      },{
      	"img":"../img/bxgzldm.jpg",
      	"bookName":"javaScript高级教程",
      	"author":"李松峰",
      	"chubanshe":"上海电子科技出版社"
      },{
      	"img":"../img/angularjskfxyd.jpg",
      	"bookName":"javaScript高级教程",
      	"author":"李松峰",
      	"chubanshe":"上海电子科技出版社"
      }
  ];
  
}])