angular.module("MyApp", ["ngSanitize"])
    .config(function ($provide) {
        $provide.decorator("dateFilter", function ($delegate) {
            return function (date) {
                return $delegate(date, "HH:mm:ss");
            };
        });
    })
    .run(function (dateFilter) {
    })
    .filter("fullName", function ($q, $http) {
        return function (contact) {
            return contact.id + ":" + contact.name;
        }
    });
    //.filter("date", function () {
    //    return function (date, format) {
    //        return "XXX";
    //    }
    //});

