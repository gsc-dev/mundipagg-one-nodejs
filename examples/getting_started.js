'use strict';

// Cria objeto requisição
let createSaleRequest = new CreateSaleRequest();

// Cria objeto do cartão de crédito
let creditCard = CreditCardHelper.createCreditCard('5555 4444 3333 2222', 'gateway', '12/2030', '999');

// Define dados do pedido
createSaleRequest
    .addCreditCardTransaction()
    .setPaymentMethodCode(PaymentMethodEnum['SIMULATOR'])
    .setCreditCardOperation(CreditCardOperationEnum['AUTH_ONLY'])
    .setAmountInCents(1098) // R 10,98
    .setCreditCard(creditCard);
;

//Cria um objeto ApiClient
let apiClient = new ApiClient();

// Faz a chamada para criação
let response = apiClient.createSale(createSaleRequest);

// Mapeia resposta
let httpStatusCode = response.isSuccess() ? 201 : 401;
console.log(httpStatusCode);