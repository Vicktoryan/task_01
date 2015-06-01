angular.module('main-application').directive('mainPage', function(){
    return {
        //scope: true,
        templateUrl: 'app/main-application.html',
        link: function($scope){
            $scope.bookmark = {};
            // $scope.func = {};
            // $scope.changeName = function(){
            // };

            // $scope.hideAllDirectives = function() {
            //     $rootScope.showScopeObjects = !$rootScope.showScopeObjects;
            // }
        }
    };
});