/**
 * Class ApiError
 * @package Gateway\One\DataContract\Report
 */
module.exports  = class ApiError extends \Exception{
    /**
     * @var string HTTP Status Code
     */
    let httpStatusCode;

    /**
     * @var Chave da requisição
     */
    let requestKey;

    /**
     * @var string
     */
    let responseBody;

    /**
     * @var array
     */
    let errorCollection;

    /**
     * @var
     */
    let requestQueryStringData;

    /**
     * @var
     */
    let requestBodyData;

    /**
     * @param string $httpStatusCode
     * @param int $requestKey
     * @param \Exception $errorCollection
     * @param $requestQueryStringData
     * @param $requestBodyData
     * @param $responseBody
     */
    constructor($httpStatusCode, $requestKey, $errorCollection, $requestQueryStringData, $requestBodyData, $responseBody){
        this.httpStatusCode = $httpStatusCode;
        this.requestKey = $requestKey;
        this.errorCollection = $errorCollection;
        this.requestQueryStringData = $requestQueryStringData;
        this.responseBody = $responseBody;
        this.requestBodyData = $requestBodyData;
    }
}