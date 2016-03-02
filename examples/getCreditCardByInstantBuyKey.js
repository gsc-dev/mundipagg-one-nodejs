'use strict';

//Cria um objeto ApiClient
let client = new ApiClient();

let instantBuyKey = '04728dc3-5e0c-47c2-b6b7-9b5c421add09';

// Faz a chamada para criação
let response = client.getCreditCard(instantBuyKey);

console.log(response);