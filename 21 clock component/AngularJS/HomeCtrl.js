(function () {
    "use strict";

    function HomeCtrl($scope) {
        $scope.format = "ss";

        $scope.tick = function (time) {
            console.log("Tick: " + time);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
