'use strict';
const ApiClient               = require('../ApiClient');
const BoletoTransaction       = require('../One/DataContract/Request/CreateSaleRequestData/BoletoTransaction');
const CreateSaleRequest       = require('../One/DataContract/Request/CreateSaleRequest');
const CreditCardOperationEnum = require('../One/DataContract/Enum/CreditCardOperationEnum');
const CreditCardBrandEnum     = require('../One/DataContract/Enum/CreditCardBrandEnum');
const AddressTypeEnum         = require('../One/DataContract/Enum/AddressTypeEnum');
const CountryEnum             = require('../One/DataContract/Enum/CountryEnum');
const CurrencyIsoEnum         = require('../One/DataContract/Enum/CurrencyIsoEnum');
const PaymentMethodEnum       = require('../One/DataContract/Enum/PaymentMethodEnum');
const FrequencyEnum           = require('../One/DataContract/Enum/FrequencyEnum');
const PersonTypeEnum          = require('../One/DataContract/Enum/PersonTypeEnum');
const BuyerCategoryEnum       = require('../One/DataContract/Enum/BuyerCategoryEnum');
const DocumentTypeEnum        = require('../One/DataContract/Enum/DocumentTypeEnum');
const EmailTypeEnum           = require('../One/DataContract/Enum/EmailTypeEnum');
const GenderEnum              = require('../One/DataContract/Enum/GenderEnum');
const BankEnum                = require('../One/DataContract/Enum/BankEnum');
const CreateBuyerRequest      = require('./../One/DataContract/Request/CreateBuyerRequest');

// Define a url utilizada
let api    = new ApiClient();
let uniqid = '1231231231';

// Cria objeto requisição
let request = new CreateBuyerRequest();

request
    .setBirthdate(Date('d/m/Y', '20/08/1990'))
    .setBuyerCategory(BuyerCategoryEnum['PLUS'])
    .setBuyerReference("C3PO")
    .setCreateDateInMerchant(new Date())
    .setDocumentNumber("12345678901")
    .setDocumentType(DocumentTypeEnum['CPF'])
    .setEmail("lskywalker@r2d2.com")
    .setEmailType(EmailTypeEnum['PERSONAL'])
    .setFacebookId("1234567890")
    .setGender(GenderEnum['MALE'])
    .setHomePhone("(21)123456789")
    .setLastBuyerUpdateInMerchant(new Date())
    .setMobilePhone("(21)987654321")
    .setName("Luke Skywalker")
    .setPersonType(PersonTypeEnum['PERSON'])
    .setTwitterId("1234567890")
    .setWorkPhone("(21)28467902")
    .addAddress()
    .setAddressType(AddressTypeEnum['COMMERCIAL'])
    .setStreet("Mos Eisley Cantina")
    .setNumber("123")
    .setComplement("")
    .setDistrict("Mos Eisley")
    .setCity("Tatooine")
    .setState("RJ")
    .setZipCode("20001000")
    .setCountry(CountryEnum['BRAZIL']);

//Cria um objeto ApiClient
// client = new Gateway\ApiClient();

//var_dump(request.getData());exit;

// Faz a chamada para criação
let response = client.createBuyer(request);