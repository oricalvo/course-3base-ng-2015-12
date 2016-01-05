function ContactService() {
    console.log("ContactService factory");

    var contacts = null;

    function getAll() {
        if (!contacts) {
            contacts = [];
        }

        return contacts;
    }

    function configure() {
    }

    return {
        getAll: getAll,
        configure: configure,
    };
}

//function ContactService() {
//    this.contacts = null;
//}

//ContactService.prototype.getAll = function () {
//    if (!this.contacts) {
//        this.contacts = [];
//    }

//    return this.contacts;
//}

angular.module("MyApp").factory("contactService", ContactService);
//angular.module("MyApp").service("contactService", ContactService);