// namespace Gateway\One\DataContract\Response;

/**
 * Class BaseResponse
 * @package Gateway\One\DataContract\Response
 */
/**
 * Class BaseResponse
 * @package Gateway\One\DataContract\Response
 */
module.exports = class BaseResponse {

    /**
     * @param isSuccess bool
     * @param data
     */
    constructor(isSuccess, data) {
        /**
         * @var bool
         */
        this.isSuccess;

        /**
         * @var object
         */
        this.data;

        this.data = data;
        this.isSuccess = isSuccess;
    }

    /**
     * @return bool
     */
    isSuccess() {
        return this.isSuccess;
    }

    /**
     * @return object
     */
    getData() {
        return this.data;
    }
}