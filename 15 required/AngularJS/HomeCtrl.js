(function () {
    "use strict";

    function HomeCtrl($scope) {
        var ori = { id: 1, name: "Ori", birthday: new Date() };
        var roni = { id: 2, name: "Roni", birthday: new Date() };

        $scope.$watch(function () {
            $scope.vs.userName = $scope.getVS("userName");
        });

        $scope.contacts = [
            ori,
            roni,
        ];

        $scope.change = function ($event) {
            $scope.contacts[0].name = "XXX";

            $scope.contacts.push({ id: 3, name: "Udi" });
        }

        $scope.save = function () {
            if ($scope.form.$invalid) {
                return;
            }

            console.log("Saving");
        }

        $scope.getVS = function (fieldName) {
            return $scope.form[fieldName].$invalid && ($scope.form[fieldName].$dirty || $scope.form.$submitted);
        }

        $scope.vs = {
            //userName: $scope.getVS("userName")
        };
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
