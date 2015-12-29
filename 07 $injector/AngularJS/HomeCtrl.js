(function () {
    "use strict";

    function HomeCtrl($injector) {
        $injector.invoke(doSomething);
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

function doSomething($location, $http, $q) {
    console.log(!!$location);
    console.log(!!$http);
    console.log(!!$q);
}

