(function () {
    "use strict";

    function SyncService($interval, $timeout, $rootScope) {
        $interval(function () {
            $rootScope.$emit("startSync");

            $timeout(function () {
                $rootScope.$emit("endSync");
            }, 1500);
        }, 2500);
    }

    angular.module("MyApp").service("SyncService", SyncService);
})();
