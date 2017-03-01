angular.module('starter.controllers', [])

.controller('AppCtrl',['$scope','$http', '$state','$location','$ionicModal', '$timeout','$ionicSlideBoxDelegate', function($scope,$http,$state, $location,$ionicModal, $timeout,$ionicSlideBoxDelegate) {
  // Form data for the login modal
  $scope.loginData = {};
  
  $scope.jump = function(url){
    window.location = url;
    window.location.reload();
  }

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
       $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
     // $scope.modal.show();
     // $location.path('#/app/login'); 
  };
  $scope.statusText = [
       {"status":0 ,"text":"请登录账号"},
       {"status":1 ,"text":"已登录"}
  ];

}])


.controller('PlaylistsCtrl',['$scope','$ionicHistory', function($scope , $ionicHistory) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
}])


.controller('browseCtrl', ['$scope','$ionicHistory', '$stateParams','$http','$ionicScrollDelegate','$location','$filter',
  function($scope,$ionicHistory, $stateParams,$http,$ionicScrollDelegate,$location,$filter) {

      // $ionicHistory.nextViewOptions({
      //      disableBack: true
      // });
      var  ionListOne = document.getElementById('ion-list-one')  ;
      var  ionListTwo = document.getElementById('ion-list-two');
      $scope.test = function(){
            alert('222');
      };
      //刚开始页面进行渲染
      $http({  
            url : "http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryAll ",  
            method : "get",
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            withCredentials :true
      }).success(function(data) { 
            $scope.data = data; 
            console.log('success');
      }).error(function(){  
            console.log('error');
      });  

      $scope.requestDate = function() {
            var  btnValue = document.getElementById('btn1'); 
            if(btnValue){
                    ionListOne.style.display = 'block';
                    ionListTwo.style.display = 'none';
            }
            $http({  
                //url : "http://10.32.33.132:8080/ivotel-examuser/questionnairePapers/queryAll ",  
                url:"http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryAll",
                method : "get",
                headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                withCredentials :true
            }).success(function(data) { 
                $scope.data = data; 
                console.log('success');
            }).error(function(){  
                console.log('error code');
            });  
      };
      // $http.get("http://10.32.33.133:8080/questionnaire/query?id=1&statusId=2").success(function (data) { 
      //     console.log(data);
      //     $scope.data = data;
      // });

      //已完成数据点击,前端传给后端数据，statusId ,状态为0.1.2  请求的格式为/api/query={statusId:1},点击按钮进行get方法获取数据
      
      $scope.requestComplete = function(){       
          var  btnValue = document.getElementById('btn2'); 
          if(btnValue){
                ionListOne.style.display = 'none';
                ionListTwo.style.display = 'block';
          }
          //console.log(btnValue);
          $http({  
            url : "http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryByStatusId?StatusId=1",  //查询所有数据，根据ng-if进行分开数据查询
            method : "get",
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            withCredentials :true
          }).success(function(data) { 
                $scope.data = data; 
                console.log('已完成'+ $scope.data);
          }).error(function(){  
                console.log('error');
          });       
      };

      $scope.requestInComplete = function(){
        var  btnValue = document.getElementById('btn3'); 
        if(btnValue){
              ionListOne.style.display = 'block';
              ionListTwo.style.display = 'none';
        }
          $http({  
            url : "http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryByStatusId?StatusId=0 ",  
            method : "get",
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            withCredentials :true
          }).success(function(data) { 
                $scope.data = data; 
                console.log('未完成');
          }).error(function(){  
                console.log('error');
          });       
      };

      $scope.requestDoing = function(){
          var  btnValue = document.getElementById('btn4'); 
          if(btnValue){
                ionListOne.style.display = 'block';
                ionListTwo.style.display = 'none';
          }
          $http({  
            url : "http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryByStatusId?StatusId=2 ",  
            method : "get",
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            withCredentials :true
          }).success(function(data) { 
                $scope.data = data; 
                console.log('进行中');
          }).error(function(){  
                console.log('error');
          });       
      };

      $scope.scrollTop = function() {
          $ionicScrollDelegate.scrollTop();
      };

      $scope.goToIndex = function(){

      };
}])

.directive('repeatDone', function () {
    return function (scope, element, attrs) {
           if (scope.$last) { // all are rendered
               scope.$eval(attrs.repeatDone);
           }
    }
})

.controller('personCenterCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location' ,function($scope,$ionicPopup, $timeout, $stateParams,$http,$ionicScrollDelegate,$location){
      $http({  
            url : "http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryByStatusId?StatusId=1",  
            method : "get",
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            withCredentials :true
      }).success(function(data) { 
            $scope.data = data; 
            console.log('success');
      }).error(function(){  
            console.log('error');
      });  
}])

//展示页面详情界面
 
.controller('listItemCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location' ,'$ionicSlideBoxDelegate','$ionicHistory',
  function($scope,$ionicPopup, $timeout,$stateParams,$http,$ionicScrollDelegate,$location,$ionicSlideBoxDelegate,$ionicHistory){  
          // $ionicHistory.nextViewOptions({
          //        disableBack: true
          // });
          $scope.repeatDone = function() {
             $ionicSlideBoxDelegate.update();
          };
          var  objData = [];
          $scope.selectedValue = {};
          $scope.radioData = [];
          $scope.wenjuanId = $stateParams.timuId; //获取问卷的Id
          console.log('问卷Id:' + $scope.wenjuanId);
          var submitData = {
               "id" :  $scope.wenjuanId 
          }
          $scope.serveData = 0;       
          $scope.objData = null;
          $scope.jsonRadio = [];                
          $scope.newJsonData = []; //根据对应的题目索引，得到正确的题目
          $scope.newMulitJsonData = [];
          $scope.currentIndex = 0;
          $scope.answerData = null;  //所有的单选题的答案
          $scope.answerMutleData = null;
          $scope.jsonItemData = null;
          $scope.selectedIndex = 0;
          $scope.answerArray = [];
          $scope.singleData = []; //所有的单选题 
          $scope.multiData = [];
          $scope.serveLength = 0;
          $scope.selectedMulitIndex = 0;
          $scope.chooseMulitData = [];
          $scope.single_length = 0;
          $scope.muiteKey = 0;
          $scope.arrData = [];
          $http({  
                  url : "../data/doing.json", 
                  //url : "http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/PaperDetail", 
                  method : "get",
                  params: submitData,
                  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                  withCredentials :true
          }).success(function(data) {                   
                    $scope.answerData = data.answer;  
                    console.log($scope.answerData);  //得到用户选择的答案 {1: "1", 2: "2"}                
                    var arr = data.questionnaireTemp.questionnaireQuestionList; //进行解析                        
                    for(var i=0; i< arr.length;i++){             //获取所有的题目对象
                        objData[i] = arr[i].responseQuestion; 
                    }
                    $scope.data = data;                              
                    $scope.objData = objData;
                    $scope.serveLength = objData.length;
                    //console.log( $scope.serveLength)
                    //console.log(JSON.stringify( $scope.objData));    

                    for(var i  in  objData){                   //将单选题 和 多选题分别存在不同的数组里面
                           if(objData[i].questiontype == 1){
                                 $scope.singleData.push(objData[i]);
                                 $scope.single_length =  $scope.singleData.length -1 ;
                           }else if(objData[i].questiontype == 2){
                                 $scope.multiData.push(objData[i]);
                           }
                    } 
                    //如果为单选的话，为 $scope.singleData                                                         
                    for(var i  in  $scope.answerData){   //i为key值开始
                        if(i == ($ionicSlideBoxDelegate.currentIndex()+1)){
                            $scope.newJsonData.push($scope.singleData[i-1].items[($scope.answerData[i])]);
                        }                                          
                    }
                    $scope.selectedIndex = parseInt($scope.answerData[$ionicSlideBoxDelegate.currentIndex()+1]) ; 
                    console.log('selectedIndex : ' +$scope.selectedIndex)                 
                    console.log('jsonNewData:' + JSON.stringify( $scope.newJsonData));  

                    //如果为多选的话，为$scope.multiData
                    $scope.answerMutleData = data.multi;
                    console.log( JSON.stringify($scope.answerMutleData));

                    //对数组进行解析
                    var temp = 0;
                    for(var i  in $scope.answerMutleData){ //i为3 
                        var arr = $scope.answerMutleData[i].split('/');
                        $scope.arrData = arr ;
                        for (var i  in arr){
                            // $scope.muiteKey = arr[i]; //获取key值,并赋值给全局变量
                        }
                       // $scope.muiteKey = arr[$ionicSlideBoxDelegate.currentIndex()]
                        console.log('arr : ' + JSON.stringify(arr));  //[1,2,3]
                        console.log('key: ' +  JSON.stringify($scope.arrData));
                        for(var j=0;j < arr.length; j++){
                             console.log('test: ' +temp );
                             if(i == ($ionicSlideBoxDelegate.currentIndex()+1)){
                                  $scope.newMulitJsonData.push($scope.multiData[temp].items[(arr[j])]);
                             }    
                        }
                        temp++;
                        console.log('arrDate:' + JSON.stringify($scope.arrData));  
                    }  
                        console.log($scope.newMulitJsonData);

                    //所有的单选全部展示完成后，开始展示所有的多选
                    $scope.selectedMulitIndex = parseInt($scope.answerMutleData[$ionicSlideBoxDelegate.currentIndex()+1]) ; 
                    $scope.muiteKey = parseInt($scope.answerMutleData[$ionicSlideBoxDelegate.currentIndex()+1]) ; 
                    console.log( $scope.selectedMulitIndex);

            }).error(function(){  
                  console.log('error');
          });        
          $scope.jsonItemData = [];
          var osingMes = document.getElementById('singleMessage');
          var omulit   = document.getElementById('muiltMessage');  
          $scope.onSlideChanged = function(index){
              $scope.currentIndex = index;
              for(var i  in $scope.answerData){
                    $scope.answerArray.push($scope.answerData[i]);
              }
              console.log('index22:' + index);
              $scope.selectedIndex = parseInt($scope.answerData[$ionicSlideBoxDelegate.currentIndex()+1])-1 ; 

              console.log('selectedIndex : ' +$scope.selectedIndex)                              
              for(var i  in  $scope.answerData){
                        if(i == ($ionicSlideBoxDelegate.currentIndex()+1)){
                            $scope.newJsonData.push($scope.singleData[i-1].items[($scope.answerData[i])]);
                            $scope.selectedIndex = $scope.answerData[i] - '0' ;
                        }
                        console.log('index:' + $scope.selectedIndex)
                      
              }
              // if($ionicSlideBoxDelegate.currentIndex()+1 >  $scope.serveLength){
              //       osingMes.style.display = 'none';
              //       omulit.style.display = 'block';
              // }
              console.log('jsonNewData:' + JSON.stringify( $scope.newJsonData)); 
              //如果为多选的话，为$scope.multiData
                  //  $scope.answerMutleData = data.multi;
                    console.log( JSON.stringify($scope.answerMutleData));
                    //对数组进行解析
                    var temp = 0;
                    for(var i  in $scope.answerMutleData){ //i为3 
                       // var b =  $scope.newMulitJsonData;  //将上一次的值赋给b
                        console.log('length :' + $scope.newMulitJsonData.length);                    
                              var arr = $scope.answerMutleData[i].split('/');
                              for(var j=0;j < arr.length; j++){
                                   console.log('test: ' + temp );
                                   if(i == ($ionicSlideBoxDelegate.currentIndex()+1)){
                                        if($scope.newMulitJsonData[j] == null){   //判断之前的所有选项是否为空 
                                           $scope.newMulitJsonData.push($scope.multiData[temp].items[(arr[j])]);
                                           $scope.muiteKey = $scope.multiData[temp] - '0';

                                        }else{
                                           $scope.newMulitJsonData = [];
                                           $scope.newMulitJsonData.push($scope.multiData[temp].items[(arr[j])]);
                                        }
                                   } 
                                     console.log('json: '+ JSON.stringify($scope.newMulitJsonData));    
                              }
                              temp++;                                                                    
                             //[1,2,3]                                             
                    }                   
                    console.log(JSON.stringify($scope.newMulitJsonData));  
                    for(var i  in $scope.newMulitJsonData){
                        console.log('i:'+ i);
                    }
                                
                    //console.log($scope.newMulitJsonData); //得到的正确答案没问题
                    //所有的单选全部展示完成后，开始展示所有的多选
                    $scope.selectedMulitIndex = parseInt($scope.answerMutleData[$ionicSlideBoxDelegate.currentIndex()+1]) ; 
                    console.log( $scope.selectedMulitIndex);
              
          };
           $scope.nextSlide = function(){ 
              if($ionicSlideBoxDelegate.currentIndex()+1 !=  $scope.serveLength) {
                      $ionicSlideBoxDelegate.next();  
              }else {
                      var alertPopup = $ionicPopup.alert({                 
                           template: '亲，已经最后一题，木有了哦！'
                      });
                      alertPopup.then(function(res) {
                           // window.location.reload();
                           // history.go(-1);
                      });
              }
                
          };

          $scope.startSlide = function(){
              $ionicSlideBoxDelegate.previous();
          };
}])

.controller('recommandCtrl',['$scope' ,'$ionicPopup', '$timeout','$stateParams','$http','$ionicScrollDelegate','$location' ,function($scope,$ionicPopup, $timeout, $stateParams,$http,$ionicScrollDelegate,$location){
      
      $scope.writeViews = function(){
            $scope.data = {};
            var myPopup = $ionicPopup.show({
                   template: '<input type="text" ng-model="data.mes">',
                   title: '请输入您的留言',      
                   scope: $scope,
                   buttons: [
                     { text: 'Cancel',
                       type: 'button-positive',
                      },
                     {
                       text: '<b>Save</b>',
                       type: 'button-positive',
                       onTap: function(e) {
                         if (!$scope.data.mes) {
                           //不允许用户关闭，除非他键入wifi密码
                             e.preventDefault();
                         } else {
                             return $scope.data.mes;
                         }
                       }
                     },
                   ]
            });
           myPopup.then(function(res) {
                console.log('您的留言是:', res);
           });
      }
}])

//退出登录

.controller('setCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location' , '$ionicHistory',function($scope,$ionicPopup, $timeout, $stateParams,$http,$ionicScrollDelegate,$location,$ionicHistory){
      $ionicHistory.nextViewOptions({
           disableBack: true
    });
      $scope.refeshSignOut = function(){
          $http({  
            //url : "../data/doing.json", 
            url:"http://10.32.33.4:8080/ivotel-examuser/logout " ,
            method : "get",
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            withCredentials :true
          }).success(function(data) { 
              if(data.code == 200){
                  var alertPopup = $ionicPopup.alert({
                        template: data.message
                  });
                  var  obj  =  document.getElementById("set-status");
                  var  obj2 =  document.getElementById("set-status2");
                  obj.style.display = "block";
                  obj2.style.display = "none";
                  alertPopup.then(function(res) {
                       $location.path('#/app/playlists'); 
                      // window.location.reload(); 
                  });
                 
              }else if(data.code == 201){
                  var alertPopup = $ionicPopup.alert({
                        template: data.message
                  });
              }           
              console.log('success');
          }).error(function(){  
              console.log('error');
          });
      }
}])

.controller('paihangbangCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location' ,function($scope,$ionicPopup, $timeout, $stateParams,$http,$ionicScrollDelegate,$location){
       
      $scope.data =  null;
      $http({  
            url : "../data/paihangbang.json", 
           // url:"http://10.32.33.4:8080/ivotel-examuser/rankQuestionnaire " ,
            method : "get",
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            withCredentials :true
      }).success(function(data) { 
            $scope.data = data; 
            console.log($scope.data );
           // console.log('success');
      }).error(function(){  
            console.log('error');
      });

      $scope.viewDetail = function($index){
            //console.log( $scope.data);
            var alertPopup = $ionicPopup.alert({
                       title: $scope.data[$index].title,
                       template: '投票数：' + $scope.data[$index].toupiao + '<br>'+ '排名：'+ ($index +1)
            });
      } 

      $scope.scrollTop = function() {
          $ionicScrollDelegate.scrollTop();
      };    
}])



.controller('moreQuestionCtrl',['$scope','$ionicHistory', '$stateParams','$http','$ionicScrollDelegate','$location','$filter' ,function($scope,$ionicHistory, $stateParams,$http,$ionicScrollDelegate,$location,$filter){
       $scope.jump = function(url){
          window.location = url;
      }

      var  ionListOne = document.getElementById('ion-list-one')  ;
      var  ionListTwo = document.getElementById('ion-list-two');
      $scope.test = function(){
            alert('222');
      };
      //刚开始页面进行渲染
      $http({  
            url : "http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryAll ",  
            method : "get",
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            withCredentials :true
      }).success(function(data) { 
            $scope.data = data; 
            console.log('success');
      }).error(function(){  
            console.log('error');
      });  

      $scope.requestDate = function() {
            var  btnValue = document.getElementById('btn1'); 
            if(btnValue){
                    ionListOne.style.display = 'block';
                    ionListTwo.style.display = 'none';
            }
            $http({  
                //url : "http://10.32.33.132:8080/ivotel-examuser/questionnairePapers/queryAll ",  
                url:"http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryAll",
                method : "get",
                headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                withCredentials :true
            }).success(function(data) { 
                $scope.data = data; 
                console.log('success');
            }).error(function(){  
                console.log('error code');
            });  
      };
      // $http.get("http://10.32.33.133:8080/questionnaire/query?id=1&statusId=2").success(function (data) { 
      //     console.log(data);
      //     $scope.data = data;
      // });

      //已完成数据点击,前端传给后端数据，statusId ,状态为0.1.2  请求的格式为/api/query={statusId:1},点击按钮进行get方法获取数据
      
      $scope.requestComplete = function(){       
          var  btnValue = document.getElementById('btn2'); 
          if(btnValue){
                ionListOne.style.display = 'none';
                ionListTwo.style.display = 'block';
          }
          //console.log(btnValue);
          $http({  
            url : "http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryByStatusId?StatusId=1  ",  
            method : "get",
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            withCredentials :true


          }).success(function(response) { 
                $scope.result = response; 
                console.log('已完成'+ $scope.result);
          }).error(function(){  
                console.log('error');
          });       
      };

      $scope.requestInComplete = function(){
        var  btnValue = document.getElementById('btn3'); 
        if(btnValue){
              ionListOne.style.display = 'block';
              ionListTwo.style.display = 'none';
        }
          $http({  
            url : "http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryByStatusId?StatusId=0 ",  
            method : "get",
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            withCredentials :true
          }).success(function(data) { 
                $scope.data = data; 
                console.log('未完成');
          }).error(function(){  
                console.log('error');
          });       
      };

      $scope.requestDoing = function(){
          var  btnValue = document.getElementById('btn4'); 
          if(btnValue){
                ionListOne.style.display = 'block';
                ionListTwo.style.display = 'none';
          }
          $http({  
            url : "http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryByStatusId?StatusId=2 ",  
            method : "get",
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            withCredentials :true
          }).success(function(data) { 
                $scope.data = data; 
                console.log('进行中');
          }).error(function(){  
                console.log('error');
          });       
      };

      $scope.scrollTop = function() {
          $ionicScrollDelegate.scrollTop();
      };

}])

.controller('answerQuestionCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location' ,function($scope,$ionicPopup, $timeout, $stateParams,$http,$ionicScrollDelegate,$location){
       $scope.jump = function(url){
          window.location = url;
      }
      var  ionListOne = document.getElementById('ion-list-one')  ;
      var  ionListTwo = document.getElementById('ion-list-two');
      $scope.test = function(){
            alert('222');
      };
      //刚开始页面进行渲染
      $http({  
            url : "http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryAll ",  
            method : "get",
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            withCredentials :true
      }).success(function(data) { 
            $scope.data = data; 
            console.log('success');
      }).error(function(){  
            console.log('error');
      });  

      $scope.requestDate = function() {
            var  btnValue = document.getElementById('btn1'); 
            if(btnValue){
                    ionListOne.style.display = 'block';
                    ionListTwo.style.display = 'none';
            }
            $http({  
                //url : "http://10.32.33.132:8080/ivotel-examuser/questionnairePapers/queryAll ",  
                url:"http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryAll",
                method : "get",
                headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                withCredentials :true
            }).success(function(data) { 
                $scope.data = data; 
                console.log('success');
            }).error(function(){  
                console.log('error code');
            });  
      };
      // $http.get("http://10.32.33.133:8080/questionnaire/query?id=1&statusId=2").success(function (data) { 
      //     console.log(data);
      //     $scope.data = data;
      // });

      //已完成数据点击,前端传给后端数据，statusId ,状态为0.1.2  请求的格式为/api/query={statusId:1},点击按钮进行get方法获取数据
      
      $scope.requestComplete = function(){       
          var  btnValue = document.getElementById('btn2'); 
          if(btnValue){
                ionListOne.style.display = 'none';
                ionListTwo.style.display = 'block';
          }
          //console.log(btnValue);
          $http({  
            url : "http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryByStatusId?StatusId=1  ",  
            method : "get",
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            withCredentials :true


          }).success(function(response) { 
                $scope.result = response; 
                console.log('已完成'+ $scope.result);
          }).error(function(){  
                console.log('error');
          });       
      };

      $scope.requestInComplete = function(){
        var  btnValue = document.getElementById('btn3'); 
        if(btnValue){
              ionListOne.style.display = 'block';
              ionListTwo.style.display = 'none';
        }
          $http({  
            url : "http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryByStatusId?StatusId=0 ",  
            method : "get",
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            withCredentials :true
          }).success(function(data) { 
                $scope.data = data; 
                console.log('未完成');
          }).error(function(){  
                console.log('error');
          });       
      };

      $scope.requestDoing = function(){
          var  btnValue = document.getElementById('btn4'); 
          if(btnValue){
                ionListOne.style.display = 'block';
                ionListTwo.style.display = 'none';
          }
          $http({  
            url : "http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/queryByStatusId?StatusId=2 ",  
            method : "get",
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            withCredentials :true
          }).success(function(data) { 
                $scope.data = data; 
                console.log('进行中');
          }).error(function(){  
                console.log('error');
          });       
      };

      $scope.scrollTop = function() {
          $ionicScrollDelegate.scrollTop();
      };
}])


//多选题和问答题的control

.controller('timuListCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location' ,'$ionicSlideBoxDelegate','$ionicHistory',
  function($scope,$ionicPopup, $timeout,$stateParams,$http,$ionicScrollDelegate,$location,$ionicSlideBoxDelegate,$ionicHistory){
   
    // $ionicHistory.nextViewOptions({
    //        disableBack: true
    // });

    $scope.repeatDone = function() {
      $ionicSlideBoxDelegate.update();
    };
   
    var objData = [];
    $scope.serveData = 0;
    var submitData = {
           "id" :$stateParams.timuId
    }
    $scope.objData = window._singleData ;
    $scope.serveLength =  window._singleData_length + 1; //3
    $scope.data =  window.totalQuestionData;
    $scope.radioData = [];
    $scope.selectedValue = {}; 
    $scope.index = $ionicSlideBoxDelegate.currentIndex()+1;
    $scope.currentIndex = 0;
    $scope.onSlideChanged = function(index){
       $scope.currentIndex = index;
    };
    $scope.nextSlide = function(){
        var  radioJsonData = $scope.selectedValue.radioData;      
        var  objData = document.getElementsByClassName('radio');
        var  slideIndex = $ionicSlideBoxDelegate.currentIndex(); 
        if(radioJsonData == null){
             var alertPopup = $ionicPopup.alert({
                 template: '您还没有选择，请选择答案！'
            }); 
        }else if(radioJsonData[slideIndex] == null && slideIndex !=  $scope.serveLength-1 ){
            var alertPopup = $ionicPopup.alert({
                 template: '您还没有选择，请选择答案！'
            });  
            return true;           
        }else {
            $ionicSlideBoxDelegate.next(); 
        }
          return ;         
    };

    $scope.startSlide = function(){
        $ionicSlideBoxDelegate.previous();
    };

    $scope.submitData = {};
    //用户提交完毕,当前的问卷被提交，修改其状态为已完成。可在已完成的栏目进行查看
    $scope.submitSuccess = function(){
       
        var radioJsonData = $scope.selectedValue.radioData;
        var radioObject  = [];
        for(var k  in radioJsonData){
             radioObject.push(radioJsonData[k]);
        }
        console.log('3333')
        console.log(radioObject);
        console.log(radioJsonData)
        //获取radioData的长度,判断用户选择的数据是否完整
        var radioLength = 0;
        var getRadioLength = function(radioJsonData){
            for(var item  in radioJsonData){
                radioLength++;
            }
            return  radioLength;
        }
        if(getRadioLength(radioJsonData) == $scope.serveLength-1){
              var submitData = window._single = {
                  "single":radioObject            
              }; 
              var submitId  = window._id = {
                   "id" : $stateParams.timuId
              } 
               console.log(JSON.stringify(submitData));
               var alertPopup = $ionicPopup.alert({
                   title: '保存成功',
                   template: '您的单选题已完成,请继续答题！'
               });
               alertPopup.then(function(res) {
                   history.go(-1);
               });
        } else{
            var alertPopup = $ionicPopup.alert({
                title: '提交失败',
                template: '您的问卷未完成,请返回查看详情！'
            });
            alertPopup.then(function(res) {
               console.log('提交失败');
            });
        }      
    };
}])


.controller('timuListMoreCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location' ,'$ionicSlideBoxDelegate','$ionicHistory',function($scope,$ionicPopup, $timeout,$stateParams,$http,$ionicScrollDelegate,$location,$ionicSlideBoxDelegate,$ionicHistory){
   
    $scope.jump = function(url){
          window.location = url;
    }

    $scope.repeatDone = function() {
      $ionicSlideBoxDelegate.update();
    };
   
    var objData = [];
    $scope.objData =  window._mutilData ;         
    $scope.serveLength = window._mutilData_length + 1; //2
    $scope.data = window.totalQuestionData
    var submitData = {
           "id" :$stateParams.timuId
    }
    $scope.connectCheckboxData = [];
    $scope.selectedValue = {}; 
    $scope.index = $ionicSlideBoxDelegate.currentIndex()+1;
    $scope.currentIndex = 0;
    $scope.selected = [] ;
    $scope.connectedData = []; 
    // console.log(connectSelected);    
    // $scope.isChecked = function(key,$parentIndex){
    //     return $scope.selected.indexOf(key) >= 0 ;
    // }
    // console.log( $scope.selected); 
    // $scope.updateSelection = function($event,key,$parentIndex){  
    //     var checkbox = $event.target ;  
    //     var checked  = checkbox.checked ;
    //     var tempSelect = [];   
    //     if($scope.selected[$parentIndex] == null){ 
    //         $scope.selected.push(key);         
    //     } else if($scope.selected[$parentIndex] != null){
    //          $scope.selected = [] ;
    //          $scope.selected.push(key); 
    //     } 
    //     var  newSelected =  new Array();
    //     newSelected =   $scope.selected;
    //     console.log('temp:'+  $scope.selected) ;
    //     $scope.connectSelected[$parentIndex] = newSelected.join('/');
    //     console.log('connectSelected:'+  JSON.stringify($scope.connectSelected)) ;
    // } ;  
    $scope.onSlideChanged = function(index){
         $scope.currentIndex = index;
    };
   
    $scope.nextSlide = function(){ 
        var  slideIndex = $ionicSlideBoxDelegate.currentIndex();       
        $scope.connectedData = $scope.selected.map(function(item){
            var connectSelected = [];
            for(var i in item){
              if(item[i]){
                connectSelected.push(parseInt(i)+1);
              }
            }
            return connectSelected.join('/');
        })

        if( $scope.connectedData == null){
             var alertPopup = $ionicPopup.alert({
                 template: '您还没有选择，请选择答案！'
            }); 
        }else if( $scope.connectedData[slideIndex] == null && slideIndex != $scope.serveLength-1 ){
            var alertPopup = $ionicPopup.alert({
                 template: '您还没有选择，请选择答案！'
            });  
            return true;           
        }else {
            $ionicSlideBoxDelegate.next(); 
        }
          return ;    
          console.log('test:'+JSON.stringify( $scope.connectedData));
        //$ionicSlideBoxDelegate.next();                     
    };

    $scope.startSlide = function(){
        $ionicSlideBoxDelegate.previous();
    };

    //用户提交完毕,当前的问卷被提交，修改其状态为已完成。可在已完成的栏目进行查看
    $scope.submitSuccess = function(){   

        var radioJsonData = $scope.connectedData;
        var radioObject  = [];
        for(var k  in radioJsonData){
             radioObject.push(radioJsonData[k]);
        }
        console.log('3333')
        console.log(radioObject);
        console.log(radioJsonData)

        //获取radioData的长度,判断用户选择的数据是否完整
        var radioLength = 0;
        var getRadioLength = function(radioJsonData){
            for(var item  in radioJsonData){
                radioLength++;
            }
            return  radioLength;
        }
        if(getRadioLength(radioJsonData) == $scope.serveLength-1){
              var submitData = window._multi ={
                  "multi":radioObject            
              }; 
              console.log(JSON.stringify(submitData));
              var alertPopup = $ionicPopup.alert({
                   title: '保存成功',
                   template: '您的多选题已完成,请返回查看详情！'
               });
               alertPopup.then(function(res) {
                   history.go(-1);
               });
        } else{
              var alertPopup = $ionicPopup.alert({
                  title: '提交失败',
                  template: '您的问卷未完成,请返回重新填写！'
              });
              alertPopup.then(function(res) {
                  console.log('提交失败');
              });
        }      
    };
}])

.controller('chooseCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location' ,function($scope,$ionicPopup, $timeout, $stateParams,$http,$ionicScrollDelegate,$location){
    $scope.jump = function(url){
          window.location = url;
    }
      $scope.chooseId = $stateParams.timuId; //获取问卷的Id
      console.log( $scope.chooseId);
      var submitData = {
           "id" : $scope.chooseId
      }
      var objData = [];
      //刚开始渲染数据，获取整个问卷的data，单选存在一个数组，多选存在一个数组
    $http({  
           // url : "../data/api.json", 
            url : "http://10.32.33.4:8080/ivotel-management/questionnaire/selectQuestionnaireDetail", 
            method : "get",
            params: submitData,
            headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    }).success(function(data) {         
            var arr =data.questionnaireQuestionList; //进行解析          
            var singleData = [] ;
            var mutilData = [];
            for(var i=0;i<arr.length;i++){
                  objData[i] = arr[i].responseQuestion; 
            } 
           // console.log(JSON.stringify(objData));  //获取所有的题目对象
            for(var i  in  objData){
                   if(objData[i].questiontype == 1){
                        singleData.push(objData[i]);
                   }else if(objData[i].questiontype == 2){
                        mutilData.push(objData[i]);
                   }
            }
            window._singleData = singleData;
            window._singleData_length = singleData.length;
            window._mutilData  = mutilData;
            window._mutilData_length = mutilData.length;
            window.totalQuestionData = data ;
            //console.log(JSON.stringify(singleData));
            //console.log(JSON.stringify(mutilData));     
            $scope.data = data; 
            $scope.serveData = data.questionnaireQuestionList[0].qqid;     
    }).error(function(){  
            console.log('error');
    });
    
    //用户填写完成后，将正确答案保存，并一起传递给后端 
    $scope.submit = function(){
          if(window._multi == null){
              window._multi = [];
          }
          var  submitTotalData = [
                window._id ,
                window._single , 
                window._multi
          ] ;
             $http({  
                  url : "http://10.32.33.4:8080/ivotel-examuser/questionnairePapers/Submit",  
                  method : "post",
                  data : submitTotalData,
                  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                  withCredentials :true
              }).success(function(data) { 
                  console.log('success');
              }).error(function(){  
                  console.log('error');
              });  
               var alertPopup = $ionicPopup.alert({
                   title: '提交成功',
                   template: '您的问卷已完成,请返回查看详情！'
               });
                alertPopup.then(function(res) {
                   history.go(-1);
              });
              
            console.log('test: ' + JSON.stringify( submitTotalData));         
    }

}])

.controller('timuListAnswerQuestionCtrl',['$scope','$ionicPopup', '$timeout', '$stateParams','$http','$ionicScrollDelegate','$location' ,function($scope,$ionicPopup, $timeout, $stateParams,$http,$ionicScrollDelegate,$location){
      
      $scope.jump = function(url){
          window.location = url;
      }
}])

