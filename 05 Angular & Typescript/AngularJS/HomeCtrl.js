/// <reference path="typings/angularjs/angular.d.ts" />
var HomeCtrl = (function () {
    function HomeCtrl($location, $scope) {
        this.message = "Hello Typescript";
    }
    return HomeCtrl;
})();
angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
//# sourceMappingURL=HomeCtrl.js.map