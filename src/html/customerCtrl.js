angular.module('CustomerApp', []).controller('CustomerCtrl', function() {

 var customerCtrl = this;
 customerCtrl.customers = [];
 customerCtrl.addCustomer = addCustomer;
 function addCustomer(firstName, lastName, personId) {
		var customer = {};
		customer.firstName = firstName;
		customer.lastName = lastName;
		customer.personId = personId;
		customerCtrl.customers.push(customer);
 }

});