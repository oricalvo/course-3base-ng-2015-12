(function () {
    "use strict";

    function DynamicLoadedCtrl($scope) {
    }

    angular.$controllerProvider.register("DynamicLoadedCtrl", DynamicLoadedCtrl);
    //angular.module("MyApp").controller("DynamicLoadedCtrl", DynamicLoadedCtrl);
})();
