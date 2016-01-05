(function () {
    "use strict";

    function HomeCtrl($scope, contactService) {
        contactService.getAll().then(function (contacts) {
            $scope.contacts = contacts;
        }).catch(function (err) {
            console.log("ERROR: " + err.message);
        });
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
