function ClockComponent($scope, $interval, $attrs, $parse) {
    var intervalId = null;

    if ($attrs.name) {
        $scope.$parent[$attrs.name] = {
            stop: function () {
                $interval.cancel(intervalId);
                intervalId = null;
            },

            start: function () {
                startInterval();
            }
        };
    }

    //$scope.$parent.$watch($attrs.format, function (newValue) {
    //    $scope.format = newValue;
    //});

    //if ($attrs.format) {
    //    $scope.format = $scope.$parent[$attrs.format];
    //}

    //var fn = $parse($attrs.onTick);

    $scope.time = new Date();

    //$scope.format = "XXX";

    function startInterval() {
        if (intervalId) {
            return;
        }

        intervalId = $interval(function () {
            $scope.time = new Date();

            $scope.onTick({ time: $scope.time });
            //fn($scope.$parent, { time: $scope.time });
        }, 1000);
    }

    startInterval();
}

angular.module("MyApp").directive("clock", function () {
    var ddo = {
        templateUrl: "Clock.html",
        controller: ClockComponent,
        controllerAs: "ctrl",
        scope: {
            format: "=",
            onTick: "&",
        },
    };

    return ddo;
});
