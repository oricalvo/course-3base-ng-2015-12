(function () {
    "use strict";

    function HomeCtrl($scope, $, contactService) {
        contactService.getAll();
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
