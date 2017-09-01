angular.module('app', ['ionic'])

.controller('appCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-right'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  }
  $scope.closeModal = function() {
    $scope.modal.hide();
  }
})