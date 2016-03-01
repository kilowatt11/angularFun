app.controller('buttonController', function ($scope){
      $scope.clicks = 0;
    $scope.click = function (){     
       $scope.clicks += 1;
             
    }
  $scope.leapYear = function(){
      
