'use strict';

//Cria um objeto ApiClient
let client = new ApiClient();

let buyerKey = '460b3d1d-5c13-4f40-92db-36aa05729c79';

// Faz a chamada para criação
response = client.getCreditCardWithBuyerKey(buyerKey);

console.log(response);