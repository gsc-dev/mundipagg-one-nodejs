'use strict';

//Cria um novo instantBuyData para que possa deletá-lo
// Cria objeto requisição
let request = new CreateInstantBuyDataRequest();

request
    .setCreditCardBrand(CreditCardBrandEnum['MASTERCARD'])
    .setCreditCardNumber('5555444433332222')
    .setExpMonth(12)
    .setExpYear(2030)
    .setHolderName('gateway TESTE')
    .setSecurityCode('999')
    .setIsOneDollarAuthEnabled(true)
    .getBillingAddress()
    .setStreet('Rua da Quitanda')
    .setNumber('199')
    .setComplement('10º andar')
    .setDistrict('Centro')
    .setCity('Rio de Janeiro')
    .setState('RJ')
    .setZipCode('20091005')
    .setCountry(CountryEnum['BRAZIL']);


//Cria um objeto ApiClient
let client = new ApiClient();

// Faz a chamada para criação
let createCreditCard = client.createCreditCard(request);

// Faz a chamada para criação
let deleteInstantBuyDataResponse = client.deleteCreditCard(createCreditCard.getData().InstantBuyKey);

console.log(deleteInstantBuyDataResponse);