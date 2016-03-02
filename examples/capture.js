'use strict';
const ApiClient = require('../ApiClient');
const CaptureRequest = require('../One/DataContract/Request/CaptureRequest');

// Define a url utilizada
ApiClient.setBaseUrl('https://sandbox.mundipaggone.com');

// Define a chave da loja
ApiClient.setMerchantKey('85328786-8BA6-420F-9948-5352F5A183EB');

// Cria objeto requisição
let request = new CaptureRequest();

// Define dados da requisição
request.setOrderKey('50c64477-4f89-4153-b82d-cda5f160c960');

//Cria um objeto ApiClient
let client = new ApiClient();

// Faz a chamada para criação
let response = client.capture(request);

// Imprime resposta

console.log(response);
