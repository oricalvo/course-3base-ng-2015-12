(function () {
    "use strict";

    function HomeCtrl($scope) {
        $scope.email = "<script>alert('Hello');</script>";
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
