'use strict';

const ApiClient = require('../ApiClient');
const CreditCard = require('../One/DataContract/Request/CreateSaleRequestData/CreditCard');
const CreditCardTransaction = require('../One/DataContract/Request/CreateSaleRequestData/CreditCardTransaction');
const CreditCardBrandEnum = require('../One/DataContract/Enum/CreditCardBrandEnum');
const Order = require('../One/DataContract/Request/CreateSaleRequestData/Order');
const CreateSaleRequest = require('../One/DataContract/Request/CreateSaleRequest');
const CreditCardOperationEnum = require('../One/DataContract/Enum/CreditCardOperationEnum');
const AddressTypeEnum = require('../One/DataContract/Enum/AddressTypeEnum');
const CountryEnum = require('../One/DataContract/Enum/CountryEnum');
const CurrencyIsoEnum = require('../One/DataContract/Enum/CurrencyIsoEnum');
const PaymentMethodEnum = require('../One/DataContract/Enum/PaymentMethodEnum');
const PersonTypeEnum = require('../One/DataContract/Enum/PersonTypeEnum');
const BuyerCategoryEnum = require('../One/DataContract/Enum/BuyerCategoryEnum');
const DocumentTypeEnum = require('../One/DataContract/Enum/DocumentTypeEnum');
const EmailTypeEnum = require('../One/DataContract/Enum/EmailTypeEnum');
const GenderEnum = require('../One/DataContract/Enum/GenderEnum');
const EcommerceCategoryEnum = require('../One/DataContract/Enum/EcommerceCategoryEnum');

// Cria objeto requisição
let request = new CreateSaleRequest();
var api = new ApiClient();
let uuid = 1231231323123;

api.setBaseUrl('https://sandbox.mundipaggone.com');
api.setMerchantKey('85328786-8BA6-420F-9948-5352F5A183EB');


// Dados da transação de cartão de crédito
let creditCardTransaction = new CreditCardTransaction();
request.addCreditCardTransaction(creditCardTransaction);

creditCardTransaction
  .setAmountInCents(100)
  .setInstallmentCount(1)
  .setCreditCardOperation(CreditCardOperationEnum['AUTH_ONLY'])
  .setTransactionDateInMerchant(new Date())
  .setTransactionReference(uuid)
  .getCreditCard()
  .setCreditCardBrand(CreditCardBrandEnum['MASTERCARD'])
  .setCreditCardNumber('5555444433332222')
  .setExpMonth(12)
  .setExpYear(2030)
  .setHolderName('gateway TESTE')
  .setSecurityCode('999')
  .getBillingAddress()
  .setAddressType(AddressTypeEnum['BILLING'])
  .setStreet('Rua da Quitanda')
  .setNumber('199')
  .setComplement('10º andar')
  .setDistrict('Centro')
  .setCity('Rio de Janeiro')
  .setState('RJ')
  .setZipCode('20091005')
  .setCountry(CountryEnum['BRAZIL']);

// Options do credit card transaction
creditCardTransaction
  .getOptions()
  .setCurrencyIso(CurrencyIsoEnum['BRL'])
  .setCaptureDelayInMinutes(0)
  .setIataAmountInCents(0)
  .setInterestRate(0)
  .setPaymentMethodCode(PaymentMethodEnum['SIMULATOR'])
  .setSoftDescriptorText('TESTE');

// Dados do comprador
request
  .getBuyer()
  .setName('Comprador Mundi')
  .setPersonType(PersonTypeEnum['COMPANY'])
  .setBuyerReference('123456')
  .setBuyerCategory(BuyerCategoryEnum['PLUS'])
  .setDocumentNumber('58828172000138')
  .setDocumentType(DocumentTypeEnum['CNPJ'])
  .setEmail('comprador@gateway.com')
  .setEmailType(EmailTypeEnum['COMERCIAL'])
  .setGender(GenderEnum['MALE'])
  .setHomePhone('3003-0460')
  .setMobilePhone('99999-8888')
  .setWorkPhone('99999-7777')
  .setBirthDate(Date('d/m/Y', '11/05/1990'))
  .setFacebookId('1234567890')
  .setTwitterId('1234567890')
  .setCreateDateInMerchant(new Date())
  .setLastBuyerUpdateInMerchant(new Date())
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

request
  .getMerchant()
  .setMerchantReference('gateway LOJA 1');

request
  .getOptions()
  .disableAntiFraud()
  .setAntiFraudServiceCode('123')
  .setCurrencyIso(CurrencyIsoEnum['BRL'])
  .setRetries(3);

request
  .getOrder()
  .setOrderReference(uuid);

request
  .getRequestData()
  .setEcommerceCategory(EcommerceCategoryEnum['B2B'])
  .setIpAddress('255.255.255.255')
  .setOrigin('123')
  .setSessionId(uuid);

// Carrinho de compras
let shoppingCart = request.addShoppingCart();
shoppingCart.setDeliveryDeadline(new Date());
shoppingCart.setEstimatedDeliveryDate(new Date());
shoppingCart.setFreightCostInCents(199);
shoppingCart.setShippingCompany('Correios');
shoppingCart
  .getDeliveryAddress()
  .setAddressType(AddressTypeEnum['SHIPPING'])
  .setStreet('Rua da Quitanda')
  .setNumber('199')
  .setComplement('10º andar')
  .setDistrict('Centro')
  .setCity('Rio de Janeiro')
  .setState('RJ')
  .setZipCode('20091005')
  .setCountry(CountryEnum['BRAZIL']);

shoppingCart
  .addShoppingCartItem()
  .setDescription('Apple iPhone 5s 16gb')
  .setDiscountAmountInCents(160000)
  .setItemReference('AI5S')
  .setName('iPhone 5S')
  .setQuantity(1)
  .setUnitCostInCents(1800)
  .setTotalCostInCents(1600);

shoppingCart
  .addShoppingCartItem()
  .setDescription('TESTE')
  .setDiscountAmountInCents(0)
  .setItemReference('TESTE')
  .setName('TESTE')
  .setQuantity(2)
  .setUnitCostInCents(1099)
  .setTotalCostInCents(2198);

//Cria um objeto ApiClient
// let client = new ApiClient;

// Faz a chamada para criação
// let response = client.createSale(request);
let response = api.createSale(request);
console.log(response);
