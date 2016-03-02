'use strict';
//Cria um objeto ApiClient
let client = new ApiClient();

// Faz a chamada para criação
let response = client.searchSaleByOrderKey('9aa2f7f2-2a69-4b9e-93ca-3ab866e26fb4');

console.log(response);