(function () {
    "use strict";

    function HomeCtrl($scope, $timeout) {
        $scope.name = "";

        $scope.$watch("address", function (newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }

            console.log(oldValue + " ---> " + newValue);

            $timeout(function () {

                console.log("E-Mail: " + $scope.email);
            }, 0);
        });

        $scope.$watch("name", function (newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }

            console.log(oldValue + " ---> " + newValue);

            $scope.email = $scope.name + "@gmail.com";

            console.log($scope.email);
        });

        $scope.change = function () {
            $scope.name = "XXX";
            $scope.address = "YYY";
        }

        //var firstTime = true;
        //$scope.$watch("name", function (newValue, oldValue) {
        //    if (firstTime) {
        //        firstTime = false;
        //        return;
        //    }

        //    console.log(oldValue + " ---> " + newValue);
        //});
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
