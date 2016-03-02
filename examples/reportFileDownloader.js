'use strict';

let client = new ApiClient();

// Faz a chamada para criação
let response = client.DownloadTransactionReportFile('20150928', "C:\\Temp");

console.log(response);