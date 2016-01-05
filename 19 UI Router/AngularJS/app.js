angular.module("MyApp", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider, $controllerProvider) {

    angular.$controllerProvider = $controllerProvider;

    $urlRouterProvider.otherwise("/home");

    $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: "/home.html",
        controller: "HomeCtrl",
    })
    .state('home.mydetails', {
        url: "/mydetails",
        templateUrl: "/MyDetails.html",
    })
    .state('contactEdit', {
        url: "/contact/:id",
        templateUrl: "/ContactEdit.html",
        controller: "ContactEditCtrl",
    })
    .state('about', {
        url: "/about",
        templateUrl: "/about.html",
        controller: "AboutCtrl",
        params: {
            email: ""
        },
        resolve: {
            lazyLoading: function ($q) {
                var deferred = $q.defer();

                require(["/AboutCtrl.js"], function () {
                    //alert("Done");

                    setTimeout(function () {
                        deferred.resolve();
                    }, 2500);
                });

                return deferred.promise;
            }
        }
    });
});

