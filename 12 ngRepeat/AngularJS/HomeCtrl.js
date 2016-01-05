(function () {
    "use strict";

    function HomeCtrl($scope) {
        var ori = { id: 1, name: "Ori" };
        var roni = { id: 2, name: "Roni" };
        $scope.contacts = [
            ori,
            ori,
            roni,
        ];

        //$scope.nums = [1, 3, 3, 4];

        $scope.log = function () {
            console.log($scope.contacts);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
