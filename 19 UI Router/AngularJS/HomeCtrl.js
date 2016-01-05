(function () {
    "use strict";

    function HomeCtrl($scope, $state) {
        $scope.title = "Home";

        $scope.gotoAbout = function () {
            $state.go("about", {email: "ddd", name: "diudhuidh"});
        }

        $scope.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
