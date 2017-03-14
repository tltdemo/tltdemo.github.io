var app = angular.module('app', []);

app.controller('commonCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('../json/list.json').then(function(res) {
        $scope.list = res.data;
    });
}])