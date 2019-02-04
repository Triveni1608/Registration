var app = angular.module('myApp',['ngStorage']);
app.controller('registrationCtrl', function($scope,$localStorage) {
    $scope.data = {
        fname : '' ,
        lname : '',
        email: '',
        password : ''
    };
    $scope.successMsg = '';

     $scope.save = function(){
        $scope.successMsg = '';
        $localStorage.data = $scope.data;
        $scope.successMsg  = "Data saved successfully";
    }
});