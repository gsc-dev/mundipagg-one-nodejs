'use strict';
const http            = require('http');
const ApiResourceEnum = require('./One/DataContract/Enum/ApiResourceEnum');
const ApiMethodEnum   = require('./One/DataContract/Enum/ApiMethodEnum');
const env             = require('./env.json');
/**
 * Class ApiClient
 * @package gateway
 */
module.exports = class ApiClient {
    constructor(value) {
        if (!value) value = {};
        /**
         * @var string
         */
        this.merchantKey = value.merchantKey || env.merchantKey || '';

        /**
         * @var string
         */
        this.baseUrl = value.baseUrl || env.baseUrl || '';

        /**
         * @var string
         */
        this.environment = value.environment || env.environment || '';

        /**
         * @var boolean
         */
        this.isSslCertsVerificationEnabled = value.isSslCertsVerificationEnabled || env.isSslCertsVerificationEnabled ||true;

    }

    /**
     * @param string environment
     */
    setEnvironment(environment) {
        this.environment = environment;
    }

    /**
     * @return string
     */
    getEnvironment() {
        return this.environment;
    }

    /**
     * @param string merchantKey
     */
    setMerchantKey(merchantKey) {
        this.merchantKey = merchantKey;
    }

    /**
     * @return string
     */
    getMerchantKey() {
        return this.merchantKey;
    }

    /**
     * @return boolean
     */
    isSslCertsVerificationEnabled() {
        return this.isSslCertsVerificationEnabled;
    }

    /**
     * @return string
     * @throws \Exception
     */
    getBaseUrl() {
        return this.baseUrl;
    }

    /**
     * @param string baseUrl
     */
    setBaseUrl(baseUrl) {
        this.baseUrl = baseUrl;
        return this.baseUrl;
    }

    /**
     * @param uri
     * @return string
     */
    buildUrl(uri) {
        // var url = sprintf("%s/%s", this.getBaseUrl(), uri);

        return uri;
    }


    /**
     * @param uri
     * @param method
     * @param null bodyData
     * @param null queryStringData
     * @return array
     */
    getOptions(uri, method, bodyData, queryStringData) {
        let options = {
            CURLOPT_FOLLOWLOCATION: true,
            CURLOPT_MAXREDIRS: 10,
            CURLOPT_HTTPHEADER: 'MerchantKey: ' + this.getMerchantKey(),
            CURLOPT_URL: this.buildUrl(uri),
            CURLOPT_RETURNTRANSFER: true,
            CURLOPT_TIMEOUT: 10,
            CURLOPT_CUSTOMREQUEST: method,
            CURLOPT_SSL_VERIFYPEER: this.isSslCertsVerificationEnabled()
        };

        // Se for passado parametro na query string, vamos concatenar eles na url
        // if (queryStringData != null) {
        //   options[CURLOPT_URL] .= '?' . http_build_query(queryStringData);
        // }

        // if (strstr(uri, 'TransactionReportFile') == false) {
        //   array_push(options[CURLOPT_HTTPHEADER], 'Content-type: application/json', 'Accept: application/json');
        // }

        // Associa o certificado para a verificação
        // if (this.isSslCertsVerificationEnabled()) {
        //   options[CURLOPT_CAINFO] = dirname(__FILE__) . '/../data/ca-certificates.crt';
        // }

        // Se o método http for post ou put e tiver dados para enviar no body
        // if (in_array(method, array(One\DataContract\Enum\ApiMethodEnum.POST, One\DataContract\Enum\ApiMethodEnum.PUT, One\DataContract\Enum\ApiMethodEnum.PATCH)) && bodyData != null) {
        // options[CURLOPT_POSTFIELDS] = json_encode(bodyData);
        // }
        return options;
    }

    /**
     * @param resource
     * @param method
     * @param null bodyData
     * @param null queryString
     * @return mixed
     * @throws \Exception
     */
    sendRequest(resource, method, bodyData, queryString) {
        // Inicializa sessão cURL
        // curlSession = curl_init();

        // Define as opções da sessão
        // curl_setopt_array(curlSession, this.getOptions(resource, method, bodyData, queryString));
        let options = this.getOptions(resource, method, bodyData, queryString);

        // Dispara a requisição cURL
        // responseBody = curl_exec(curlSession);

        // Obtém o status code http retornado
        // httpStatusCode = curl_getinfo(curlSession, CURLINFO_HTTP_CODE);

        // Fecha a sessão cURL
        // curl_close(curlSession);

        // Verifica se não obteve resposta
        // if (!responseBody) throw new \Exception("Error Processing Request", 1);

        //Verifica se é o método do transactionReport, o formato de resposta dele não é em JSON
        // if (strstr(resource, 'TransactionReportFile') != false) {
        //   return responseBody;
        // }

        // Decodifica a resposta json
        // let response = json_decode(responseBody);

        // Verifica se o http status code for diferente de 2xx ou se a resposta teve erro
        // if (!(httpStatusCode >= 200 && httpStatusCode < 300) || !empty(response.ErrorReport)) {
        // @this.handleApiError(httpStatusCode, response.RequestKey, response.ErrorReport, queryString, bodyData, responseBody);
        // }
        // Retorna a resposta
        // return response;
        return options;
    }


    /**
     * @param One\DataContract\Request\CreateSaleRequest createSaleRequest
     * @return BaseResponse
     * @throws \Exception
     */
    createSale(createSaleRequest) {
        // Dispara a requisição
        // let createSaleResponse = this.sendRequest(ApiResourceEnum.SALE, ApiMethodEnum.POST, createSaleRequest.getData());

        // let isSuccess = false;

        // console.log(createSaleRequest);
        // Verifica sucesso
        // if (empty(createSaleResponse.BoletoTransactionResultCollection) && empty(createSaleResponse.CreditCardTransactionResultCollection)) {
        //   isSuccess = false;
        // } else {
        //   isSuccess = true;

        // if (count(createSaleResponse.BoletoTransactionResultCollection) > 0) foreach (createSaleResponse.BoletoTransactionResultCollection as boletoTransaction) {
        //   if (!boletoTransaction.Success) isSuccess = false;
        // }

        // if (count(createSaleResponse.CreditCardTransactionResultCollection) > 0) foreach (createSaleResponse.CreditCardTransactionResultCollection as creditCardTransaction) {
        //   if (!creditCardTransaction.Success) isSuccess = false;
        // }

        // return isSuccess;
        return createSaleRequest;
    }

};
