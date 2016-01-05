(function () {
    "use strict";

    function HomeCtrl($scope) {

        $scope.log = function () {
            console.log($scope.birthday);
        }

        $scope.change = function () {
            $scope.birthday = new Date();
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
