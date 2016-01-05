angular.module("MyApp").directive("datepicker", function () {

    var ddo = {
        restrict: "E",
        require: "ngModel",
        compile: function (element, attrs) {
            console.log("Compile");

            element.html("<input />");

            return function link(scope, element, attrs, ngModel) {
                var input = element.find("input");

                ngModel.$render = function () {
                    input.val(ngModel.$modelValue);
                }

                console.log(ngModel);
                console.log("Link");

                input.datepicker();
            }
        },
    };

    return ddo;
});
