'use strict';

//Cria um objeto ApiClient
let client = new ApiClient();

// Faz a chamada para criação
let file_to_parse = client.SearchTransactionReportFile('20150928');

let response = client.ParseTransactionReportFile(file_to_parse);

console.log(response);