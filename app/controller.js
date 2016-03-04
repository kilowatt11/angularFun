app.controller('buttonController', function ($scope, $timeout) {
    $scope.clicks = 35;
    $scope.timer = function () {
        $scope.clicks--;
        $scope.timeout = $timeout($scope.timer, 1000)
       
       if($scope.clicks == 0){
           $scope.stop();
           
       }
       
       
       
             
    };

    $scope.start = function () {
        $scope.timer();
    };
    $scope.stop = function () {
        $timeout.cancel($scope.timeout);
    }

});