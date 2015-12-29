(function () {
    "use strict";

    //HomeCtrl.$inject = ["$scope", "$timeout"];
    function HomeCtrl($scope, $timeout) {
    }
    HomeCtrl.$inject = ["$scope", "$timeout"];

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

    //angular.module("MyApp").controller("HomeCtrl",
    //    [
    //        "$scope",
    //        "$timeout",
    //        HomeCtrl
    //    ]);

})();
