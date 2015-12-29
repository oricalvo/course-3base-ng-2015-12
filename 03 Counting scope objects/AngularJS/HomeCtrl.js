(function () {
    "use strict";

    function HomeCtrl($scope, $location, $rootScope, $timeout) {
        this.name = "";
        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
        this.root = $rootScope;
        this.$scope = $scope;
        this.$timeout = $timeout;
    }

    HomeCtrl.prototype.add = function () {
        var me = this;

        var contact = {
            name: this.name,
        };

        this.$timeout(function () {
            me.contacts.push(contact);
        }, 0);

        //setTimeout(function () {

        //    $scope.$apply(function () {
        //        A();
        //        B();
        //        C();
        //    });

        //}, 1000);

        //setTimeout(function () {
        //    me.contacts.push(contact);
        //    me.$scope.$apply();
        //}, 0);
    }

    HomeCtrl.prototype.remove = function (index) {
        this.contacts.splice(index, 1);
    }

    angular.module("MyApp").controller("HomeCtrl", [
        "$scope",
        "$location",
        "$rootScope",
        "$timeout",
        HomeCtrl
    ]);
})();
