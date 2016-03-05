
angular.module('CustomerApp', []).controller('CustomerCtrl', [ '$scope', 'Validator', function ($scope, Validator) {

    var customerCtrl = this;
    customerCtrl.customers = [];
    customerCtrl.firstNameStatus = {valid: true};
    customerCtrl.lastNameStatus = {valid: true};
    customerCtrl.personIdStatus = {valid: true};
    customerCtrl.addCustomer = addCustomer;

    function addCustomer(firstName, lastName, personId) {

        customerCtrl.firstNameStatus = Validator.validateMandatory(firstName);
        customerCtrl.lastNameStatus = Validator.validateMandatory(lastName);
        customerCtrl.personIdStatus = Validator.validatePersonId(personId);

        if (isCustomerValid(customerCtrl)) {
            var customer = {};
            customer.firstName = firstName;
            customer.lastName = lastName;
            customer.personId = personId;
            customerCtrl.customers.push(customer);
        }
    }

    function isCustomerValid(customerCtrl) {
        return customerCtrl.firstNameStatus.valid && customerCtrl.lastNameStatus.valid && customerCtrl.personIdStatus.valid;
    }

}]).service('Validator', function() {

    var validators = {
        validateMandatory: validateMandatory,
        validatePersonId: validatePersonId
    };

    function validateMandatory(value) {
        var result = {valid: true, errorMessage: 'Fältet är obligatoriskt.' };

        result.valid = value !== '' && value !== undefined && value !== null;
        return result;
    }

    function validatePersonId(personId) {
        var result = {valid: true, errorMessage: 'Personnummer är felaktigt ifyllt.' };
        result.valid = personId && personId.length >= 8;

        return result;
    }

    return validators;
});