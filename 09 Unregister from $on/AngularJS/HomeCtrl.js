(function () {
    "use strict";

    function HomeCtrl($scope, $rootScope) {
        console.log("HomeCtrl created");

        $scope.refresh();

        var off1 = undefined;
        var off2 = undefined;

        function register() {
            off1 = $rootScope.$on("startSync", function () {
                console.log("startSync");

                $scope.message = "Start";
            });

            off2 = $rootScope.$on("endSync", function () {
                console.log("endSync");

                $scope.message = "End";
            });
        }

        function unregister() {
            if (off1) {
                off1();
            }

            if (off2) {
                off2();
            }
        }

        $scope.disableNotification = function () {
            unregister();
        }

        $scope.$on("$destroy", function () {
            unregister();
        });

        register();
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

    angular.module("MyApp").controller("ChildCtrl", function ($scope, $attrs) {
        if ($attrs.name) {
            $scope.$parent[$attrs.name] = $scope;

            $scope.doSomething = function () {
            }
        }
    });
})();
