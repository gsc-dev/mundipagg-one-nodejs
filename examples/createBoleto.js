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

// Define a url utilizada
let api    = new ApiClient();
let uniqid = '1231231231';


console.log(api);

// Cria objeto requisição
let request = new CreateSaleRequest();

// Dados da transação de boleto
let boletoTransaction = new BoletoTransaction();
request.addBoletoTransaction(boletoTransaction);

boletoTransaction
    .setAmountInCents(199)
    .setBankNumber(BankEnum.ITAU)
    .setDocumentNumber('1245')
    .setInstructions('SR. CAIXA, FAVOR NÃO RECEBER APÓS VENCIMENTO.')
    .setTransactionDateInMerchant(new Date())
    .setTransactionReference(uniqid)
    .getOptions()
    .setCurrencyIso(CurrencyIsoEnum.BRL)
    .setDaysToAddInBoletoExpirationDate(5);

// Endereço de cobrança do comprador no do boleto
boletoTransaction
    .getBillingAddress()
    .setAddressType(AddressTypeEnum['BILLING'])
    .setStreet('Rua da Quitanda')
    .setNumber('199')
    .setComplement('10º andar')
    .setDistrict('Centro')
    .setCity('Rio de Janeiro')
    .setState('RJ')
    .setZipCode('20091005')
    .setCountry(CountryEnum.BRAZIL);

// Dados do comprador
request
    .getBuyer()
    .setName('Comprador Mundi')
    .setPersonType(PersonTypeEnum.COMPANY)
    .setBuyerReference('123456')
    .setBuyerCategory(BuyerCategoryEnum.PLUS)
    .setDocumentNumber('58828172000138')
    .setDocumentType(DocumentTypeEnum.CNPJ)
    .setEmail('comprador@gateway.com')
    .setEmailType(EmailTypeEnum.COMERCIAL)
    .setGender(GenderEnum.MALE)
    .setHomePhone('(21)30030460')
    .setMobilePhone('(21)999998888')
    .setBirthDate(Date('d/m/Y', '11/05/1990'))
    .setFacebookId('1234567890')
    .setTwitterId('1234567890')
    .setCreateDateInMerchant(new Date())
    .setLastBuyerUpdateInMerchant(new Date())
    .addAddress()
    .setAddressType(AddressTypeEnum.COMMERCIAL)
    .setStreet('Rua da Quitanda')
    .setNumber('199')
    .setComplement('10º andar')
    .setDistrict('Centro')
    .setCity('Rio de Janeiro')
    .setState('RJ')
    .setZipCode('20091005')
    .setCountry(CountryEnum.BRAZIL);

request
    .getMerchant()
    .setMerchantReference('gateway LOJA 1');

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
    .setCountry(CountryEnum.BRAZIL);

shoppingCart
    .addShoppingCartItem()
    .setDescription('Apple iPhone 5s 16gb')
    .setDiscountAmountInCents(20000)
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
let client = new ApiClient();

// Faz a chamada para criação
let response = client.createSale(request);

// Imprime resposta
console.log(response);
