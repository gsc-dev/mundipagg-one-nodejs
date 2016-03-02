'use strict';

// Cria objeto requisição
let request = new CreateInstantBuyDataRequest();

request
    .setCreditCardBrand(CreditCardBrandEnum['MASTERCARD'])
    .setBuyerKey('460b3d1d-5c13-4f40-92db-36aa05729c79')
    .setCreditCardNumber('4111111111111111')
    .setExpMonth(10)
    .setExpYear(22)
    .setHolderName('LUKE SKYWALKER')
    .setSecurityCode('999')
    .setIsOneDollarAuthEnabled(false)
    .getBillingAddress()
    .setStreet('Mos Eisley Cantina')
    .setNumber('123')
    .setComplement('')
    .setDistrict('Mos Eisley')
    .setCity('Tatooine')
    .setState('RJ')
    .setZipCode('20001000')
    .setCountry(CountryEnum['BRAZIL']);

//Cria um objeto ApiClient
let client = new ApiClient();

// Faz a chamada para criação
let response = client.createCreditCard(request);

console.log(response);