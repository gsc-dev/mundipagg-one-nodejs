'use strict';

//Cria um objeto ApiClient
let client = new ApiClient();

let request = new CreateBuyerRequest();

request
    .setBirthdate(Date('d/m/Y', '11/05/1990'))
    .setBuyerCategory(BuyerCategoryEnum['PLUS'])
    .setBuyerReference('123456')
    .setCreateDateInMerchant(new Date())
    .setDocumentNumber('58828172000138')
    .setDocumentType(DocumentTypeEnum['CNPJ'])
    .setEmail('comprador@gateway.com')
    .setEmailType(EmailTypeEnum['COMERCIAL'])
    .setFacebookId('1234567890')
    .setGender(GenderEnum['MALE'])
    .setHomePhone('3003-0460')
    .setIpAddress('192.168.0.1')
    .setLastBuyerUpdateInMerchant(new Date())
    .setMobilePhone('99999-8888')
    .setName('Comprador Mundi')
    .setPersonType(PersonTypeEnum['COMPANY'])
    .setTwitterId('1234567890')
    .setWorkPhone('99999-7777')
    .addAddress()
    .setAddressType(AddressTypeEnum['COMMERCIAL'])
    .setStreet('Rua da Quitanda')
    .setNumber('199')
    .setComplement('10º andar')
    .setDistrict('Centro')
    .setCity('Rio de Janeiro')
    .setState('RJ')
    .setZipCode('20091005')
    .setCountry(CountryEnum['BRAZIL']);
//var_dump(request);exit;
// Faz a chamada para criação
let responseBuyer = client.createBuyer(request);

let response = client.getBuyer(responseBuyer.getData().BuyerKey); 