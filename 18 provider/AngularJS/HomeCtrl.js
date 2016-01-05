(function () {
    "use strict";

    function HomeCtrl($scope, $location, contactService) {
        contactService.getAll();

        $scope.change = function () {
            $location.url("blabla");

            //window.location.assign("blabla");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
