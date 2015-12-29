angular.module("MyApp", []).run(function ($rootScope) {
    var counter = 0;

    $rootScope.count = function () {
        counter = 0;
        scan($rootScope);

        console.log(counter);
    }

    function scan(scope) {
        ++counter;

        for (var child = scope.$$childHead; child != null; child = child.$$nextSibling) {
            scan(child);
        }
    }
});

