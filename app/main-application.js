angular.module('main-application').directive('mainPage', function(apiBookmarkData){
    return {
        //scope: {},
        templateUrl: 'app/main-application.html',
        link: function($scope){
            $scope.bookmarks = apiBookmarkData.load();
            $scope.newBookmark = [];
            $scope.selectedItem = null;
            
            $scope.stateEditForm = function(state){
                $scope.isEdit = state;
            }
            
            $scope.editBookmark = function(bookmark){
                $scope.selectedItem = bookmark;
                $scope.newBookmark =  angular.copy(bookmark);
                $scope.isEdit = true;
            }

            $scope.getEmptyBookmark = function(isLastId){
                $scope.newBookmark = {
                    id: isLastId ? $scope.newBookmark.id : '',
                    url: '',
                    title: '',
                    tags: [],
                    customTag: ''
                };
            }
        }
    };
});