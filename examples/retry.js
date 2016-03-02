'use strict';

// Cria objeto requisição
let request = new RetryRequest();

// Define dados da requisição
request.setOrderKey('ded667d7-01c4-410c-abb0-244126dfa5b9');
creditCardTransaction = new RetrySaleCreditCardTransaction();
creditCardTransaction.setTransactionKey('35736c57-45ff-467f-998e-6ac4905e13fc');
request.addRetrySaleCreditCardTransactionCollection(creditCardTransaction);

//Cria um objeto ApiClient
let client = new ApiClient();

// Faz a chamada para criação
let response = client.Retry(request);

console.log(response);