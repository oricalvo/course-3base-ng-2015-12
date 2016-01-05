(function () {
    "use strict";

    angular.module("MyApp").factory("contactService", function ($q, $http) {
        return {
            getAll: function () {

                //$q.all[
                //    $http.get("/groups.json"),
                //    $http.get("/contacts.json")
                //].then(function (arr) {
                //    groups = arr[0];
                //    contacts = arr[1];
                //}).catch(function () {
                //});

                var p1 = $http.get("/groups.json").then(function (res) {

                    return res.data;
                });

                var p2 = $http.get("/contacts.json").then(function (res) {

                    return res.data;
                });

                return $q.all([p1, p2]);
            }
        }

        function delay(timeout, obj) {
            var deferred = $q.defer();

            setTimeout(function () {
                deferred.resolve(obj);
            }, timeout);

            return deferred.promise;
        }

        delay(100, "Ori").then(function (obj) {
        });
    });
})();
