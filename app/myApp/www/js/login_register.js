
//登录注册模块js文件

angular.module('starter.login', [])
//登录
.controller('loginCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location','$window' ,'$ionicHistory',function($scope, $ionicPopup, $timeout,$stateParams,$http,$ionicScrollDelegate,$location,$window,$ionicHistory){
    
    //解决web浏览器只跟踪一个历史浏览记录
    $ionicHistory.nextViewOptions({
         disableBack: true
    });  
    //提交表单，验证登录
    $scope.doLogin = function() {
           console.log('Doing login', $scope.loginData);
           var  loginObj = {};
           loginObj = $scope.loginData;
           console.log(JSON.stringify(loginObj));
           if($scope.loginData.username == null && $scope.loginData.password == null){
              var alertPopup = $ionicPopup.alert({
                  template: "您还没有登录，请登录！"
              });
           } else if($scope.loginData.username != null && $scope.loginData.password == null){
              var alertPopup = $ionicPopup.alert({
                  template: "您还没有输入密码，请输入密码！"
              });
           } else if($scope.loginData.username == null && $scope.loginData.password != null){
              var alertPopup = $ionicPopup.alert({
                  template: "您还没有输入用户名，请输入用户名！"
              });
           } else if($scope.loginData  != null){         
                 //发送数据
                  $http({  
                        //url : "http://10.32.33.133:8080/login",  
                        url : " ", 
                        method : "post",
                        params :  loginObj,
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
                        withCredentials :true
                       
                  }).success(function(data) {  
                      
                       console.log(data);
                       //如果用户不存在，返回登录界面
                       if (data.code === 0) {

                           console.log('code'+data.code);
                           $location.path('#/app/login');
                       }
                      //如果用户账号正确，返回首页
                      if(data.code == "200"){
                          $location.path("#/app/playlists");
                          //$ionicHistory.goBack(-2);              
                         // $window.location.reload();
                          var  obj  =  document.getElementById("set-status");
                          var  obj2 =  document.getElementById("set-status2");
                          obj.style.display = "none";
                          obj2.style.display = "block";
                      }else if(data.code == "101"){
                         var alertPopup = $ionicPopup.alert({
                              template: data.message
                         });
                         //alert(data.message);
                      }else if(data.code == "102"){
                         var alertPopup = $ionicPopup.alert({
                             template: data.message
                         });
                        
                      }else{
                          var alertPopup = $ionicPopup.alert({
                             template: data.message
                          });
                      }
                      console.log(data.code);       
                  }).error(function(){  
                        console.log("请求服务器失败");
                       // window.location.reload();
                  }); 
          } 
     
    };
    $scope.jump = function(url){
        window.location = url;
    }
    $scope.backup = function(){
         $ionicHistory.goBack(2); 
    }
  
}])

//注册
.controller('LoginInCtrl',['$scope','$ionicPopup', '$timeout', '$ionicModal','$stateParams','$http','$ionicScrollDelegate','$location' ,'$ionicHistory',function($scope,$ionicPopup, $timeout,$ionicModal, $stateParams,$http,$ionicScrollDelegate,$location,$ionicHistory){
      //解决web浏览器只跟踪一个历史浏览记录
      $ionicHistory.nextViewOptions({
           disableBack: true
      });
      $scope.registerData = {};
      $scope.startRegister = function(){
          console.log($scope.registerData );
          var registerObj = {};
          registerObj = $scope.registerData;
          if($scope.registerData == null){
              var alertPopup = $ionicPopup.alert({
                  template: "您还没有登录，请登录！"
              });
           } else if($scope.registerData.email == null && $scope.registerData.username != null && $scope.registerData.password2 != null && $scope.registerData.password != null){
              var alertPopup = $ionicPopup.alert({
                  template: "您还没有输入邮箱，请输入邮箱！"
              });
           } else if($scope.registerData.password == null && $scope.registerData.email != null && $scope.registerData.username != null){
              var alertPopup = $ionicPopup.alert({
                  template: "您还没有输入密码，请输入密码！"
              });
           }else if($scope.registerData.password2 == null && $scope.registerData.password != null && $scope.registerData.email != null && $scope.registerData.username != null){
                var alertPopup = $ionicPopup.alert({
                  template: "您还没有输入密码，请确认密码！"
              });
           } else if($scope.registerData != null){          
                  $http({  
                        url : "http://10.32.33.4:8080/ivotel-examuser/registe",  
                        method : "post",
                        params :  registerObj,
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }

                  }).success(function(data) { 
                      if(data.code == "201"){
                          var alertPopup = $ionicPopup.alert({
                              template: data.message
                          });
                         
                      } else if(data.code == "202" ){
                          var alertPopup = $ionicPopup.alert({
                               template: data.message
                           });
                      } else if(data.code == "203"){
                          var alertPopup = $ionicPopup.alert({
                               template: data.message
                           });
                      }else if(data.code == "204"){
                          var alertPopup = $ionicPopup.alert({
                               template: data.message
                           });
                      }else if(data.code == "205"){
                          var alertPopup = $ionicPopup.alert({
                               template: data.message
                           });
                      }else if(data.code == "200"){              
                          var alertPopup = $ionicPopup.alert({
                               title: '注册成功',
                               template: '您已注册成功,请登录！'
                          });
                          alertPopup.then(function(res) {
                               window.location.reload(); 
                               history.go(-1);
                           });
                         //$location.path('#/app/login');
                        // window.location.reload();  
                         //history.go(-1);
                        
                      }        
                        //注册成功。跳转到登录页面
                        //alert('激活链接已发送到您的邮箱，请注意查收，点击激活即可进行登录');             
                        //$location.path('#/app/personInfo');                
                  }).error(function(){  
                      var alertPopup = $ionicPopup.alert({                 
                           template: '服务器请求失败！'
                      });
                      alertPopup.then(function(res) {
                           // window.location.reload();
                           // history.go(-1);
                      });
                  }); 
          } 
      }
      $scope.jump = function(url){
          window.location = url;
      }
}])
