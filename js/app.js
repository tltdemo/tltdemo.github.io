var app = angular.module('app', []);

app.controller('commonCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('../json/list.json').then(function(res) {
        $scope.list = res.data;

        var allTags = [];
        res.data.forEach(function(obj){
            allTags = allTags.concat(obj.tags);
        });

        var uniqueTag = { };
        for (var i = 0, j = allTags.length; i < j; i++) {
            if (uniqueTag[allTags[i]]) {
                uniqueTag[allTags[i]]++;
            }
            else {
                uniqueTag[allTags[i]] = 1;
            } 
        }
        $scope.uniqueTags = uniqueTag;
    });
}])