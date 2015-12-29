(function () {
    "use strict";

    function HomeCtrl($location) {
        this.name = "";
        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    HomeCtrl.prototype.add = function () {
        var contact = {
            name: this.name,
        };

        this.contacts.push(contact);
    }

    HomeCtrl.prototype.change = function () {
        $("body").append("{{XXX}}");
    }

    angular.module("MyApp").controller("HomeCtrl", [
        "$location",
        HomeCtrl
    ]);
})();
