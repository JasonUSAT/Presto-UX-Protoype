function Controller($scope) {
  $scope.master= {};
 
  $scope.update = function(ele) {
    $scope.master= angular.copy(ele);
  };
 
  $scope.reset = function() {
    $scope.ele = angular.copy($scope.master);
  };
 
  $scope.isUnchanged = function(ele) {
    return angular.equals(ele, $scope.master);
  };
 
  $scope.reset();
}