/// <reference path="typings/angularjs/angular.d.ts" />

class HomeCtrl {
    message: string;

    constructor($location, $scope) {
        this.message = "Hello Typescript";
    }
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

