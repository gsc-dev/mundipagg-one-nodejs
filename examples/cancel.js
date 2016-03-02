'use strict';

const ApiClient = require('../ApiClient');
const CancelRequest = require('../One/DataContract/Request/CancelRequest');

ApiClient.setBaseUrl("https://sandbox.mundipaggone.com");

// Define a chave da loja
ApiClient.setMerchantKey("85328786-8BA6-420F-9948-5352F5A183EB");

// Cria objeto requisição
let request = new CancelRequest();

// Define dados da requisição
request.setOrderKey("3016a3cb-90c0-4a22-863e-4e707ba7251d");

//Cria um objeto ApiClient
let client = new ApiClient();

// Faz a chamada para criação
let response = client.cancel(request);

// Imprime resposta
console.log(response);
