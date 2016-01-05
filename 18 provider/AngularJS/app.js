angular.module("MyApp", []).config(function (contactServiceProvider) {
}).value("contactService", {
    getAll: function () {
    }
});


//function ContactServiceProvider() {
//    console.log("ContactServiceProvider ctor");
//}

//ContactServiceProvider.prototype.$get = function () {
//    console.log("ContactServiceProvider $get");

//    return new ContactService(this.cachingEnabled);
//}

//ContactServiceProvider.prototype.enableCaching = function (enabled) {
//    this.cachingEnabled = enabled;
//}

//function ContactService(caching) {
//    console.log("ContactService ctor");

//    this.caching = caching;
//}

//ContactService.prototype.getAll = function () {
//    console.log("ContactService getAll");
//}

//angular.module("MyApp").provider("contactService", ContactServiceProvider);

//angular.module("MyApp").provider("contactService", function () {
//    var caching;

//    this.$get = function () {
//        return {
//            getAll: function () {
//            }
//        };
//    }

//    this.enableCaching = function () {
//    }
//});
