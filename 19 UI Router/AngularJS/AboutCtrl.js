(function () {
    "use strict";

    function AboutCtrl($scope, $stateParams) {
        console.log("Email: " + $stateParams.email);
    }

    //angular.module("MyApp").controller("AboutCtrl", AboutCtrl);

    angular.$controllerProvider.register("AboutCtrl", AboutCtrl);
})();
