'use strict';
//Cria um objeto ApiClient
let client = new ApiClient();

let instantBuyKey = '04728dc3-5e0c-47c2-b6b7-9b5c421add09';

let updateBuyer = new UpdateInstantBuyDataRequest();

updateBuyer.setBuyerKey('247210dc-e02e-4c2c-9120-652e18aa8de8');

// Faz a chamada para criação
let response = client.updateInstantBuyData(instantBuyKey, updateBuyer);

console.log(response);