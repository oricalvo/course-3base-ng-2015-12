(function () {
    "use strict";

    function HomeCtrl($scope) {
        var ori = { id: 1, name: "Ori", birthday: new Date() };
        var roni = { id: 2, name: "Roni", birthday: new Date() };

        $scope.contacts = [
            ori,
            roni,
        ];

        $scope.change = function ($event) {
            $scope.contacts[0].name = "XXX";

            $scope.contacts.push({ id: 3, name: "Udi" });
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
