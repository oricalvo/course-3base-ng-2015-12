(function () {
    "use strict";

    function ContactEditCtrl($scope, $stateParams) {
        alert($stateParams.id);
    }

    angular.module("MyApp").controller("ContactEditCtrl", ContactEditCtrl);
})();
