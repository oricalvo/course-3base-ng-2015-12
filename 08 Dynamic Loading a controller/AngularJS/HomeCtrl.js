(function () {
    "use strict";

    function HomeCtrl($scope) {
        $scope.load = function () {
            require(["DynamicLoadedCtrl"], function () {
                $scope.$apply(function () {
                    $scope.showController = true;
                });
            });
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
