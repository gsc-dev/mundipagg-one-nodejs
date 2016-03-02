'use strict';

//Cria um objeto ApiClient
let client = new ApiClient();

// Faz a chamada para criação
let response = client.SearchTransactionReportFile('20150928');

console.log(response);