/**
 * Alexandr Kaznacheiskiy
 * scype: counturyan or alien000@mail.ru
 *
 * using
 *
 * base angular module should have
 * angular.module('......', [ 'directive-pavlick-marozov-application' ]
 * .value('_rootScopeArrayPavelMorozov', [])  - scope object name array
 * .value('_pavelMorozovShow', false)         - show directive
 * .constant('PAVLICK_MOROZOV_IS_LIFE', true) - create directive
 * .run(function($rootScope, _rootScopeArrayPavelMorozov, _pavelMorozovShow){
 *      $rootScope.pavelMorozovShow = _pavelMorozovShow;
 *      for(method in $rootScope) _rootScopeArrayPavelMorozov.push(method);
 * });
 *
 * <div pavlick-morozov="name scope"></div>
 * <{directive name} pavlick-morozov="name scope"></{directive name}>
 * But directive don't have replace: true, may be you have problem ui.router
 * if you have show/ hide add
 * $scope.(name) = function() {
 *   $rootScope.createPavlickMorozov = !$rootScope.createPavlickMorozov;
 * };
 *
 */
angular.module('pavlickMorozov-application',[])
.directive('pavlickMorozov', function($compile, $rootScope, _rootScopeArrayPavelMorozov, PAVLICK_MOROZOV_IS_LIFE){
    return {
        transclude: true,
        scope: true,
        rectric: 'A',
        templateUrl: 'app/component/directive-components/pavlickMorozov.html',
        link: function($scope, iElm, attr){
            $scope.createDerective = PAVLICK_MOROZOV_IS_LIFE;
            if (!PAVLICK_MOROZOV_IS_LIFE) return;

            $scope.nameScope = attr.pavlickMorozov;
            $rootScope.$watch(function() {
                    return new Date().toTimeString();
                }, function(newValue, oldValue, scope) {
                $scope.pavelMorozovShow = $rootScope.pavelMorozovShow;
            });

            $scope.$parent.$watch(
                function() {
                    return new Date().toTimeString();
                },
                function(newValue, oldValue, scope) {
                    var changed = [];
                    var isRootScope = scope.$parent ? false : true;
                    if (isRootScope){
                        var enableChange = false;
                        for(var rootObjectName in $rootScope) {
                            if (_rootScopeArrayPavelMorozov.indexOf(rootObjectName) === -1 && rootObjectName[0] != '$'){
                                var typeOfChange = (typeof $rootScope[rootObjectName]);

                                // if (typeOfChange === 'function' || typeOfChange === 'number' || typeOfChange === 'boolean'){
                                //     var valueText = (typeOfChange === 'object') ? angular.json($rootScope[rootObjectName]) : $rootScope[rootObjectName];
                                //     typeOfChange += ' (' + value  +')';
                                // }

                                changed.push({
                                    name : rootObjectName,
                                    type: typeOfChange,
                                    value: JSON.stringify($rootScope[rootObjectName])
                                });

                            }
                        }
                        if (!$scope.countChangeName){
                            $scope.nameScope += ' - SCOPE ROOT';
                            $scope.countChangeName = 1;
                        }
                    } else {
                        if (!$scope.countChangeName){
                            $scope.nameScope = 'scope - ' + $scope.nameScope;
                            $scope.countChangeName = 1;
                        }

                        for(var objectName in scope){
                            var enableChange = false;

                            for(var rootObjectName in $rootScope)
                                if (objectName === rootObjectName) enableChange = true;

                            if (enableChange === false){
                                var typeOfChange = (typeof scope[objectName]);
                                var isParent;

                                for(var parentObjectName in scope.$parent)
                                    if (parentObjectName === objectName){ //} && parentObjectName !== '$$transcluded') {
                                        isParent = true;
                                    };

                                // if (typeOfChange !== 'function'){
                                //     var valueText = (typeOfChange === 'object') ? JSON.stringify(scope[objectName]) : scope[objectName];
                                //     typeOfChange += ' (' + valueText +')';
                                // }

                                if (objectName !== '$$transcluded')
                                    changed.push({
                                        name: objectName,
                                        type: typeOfChange,
                                        value: JSON.stringify(scope[objectName]),
                                        isParent: isParent
                                    });
                            }
                        }
                    }
                    $scope.newObjectsScope = changed;
            });
        }
    };
});