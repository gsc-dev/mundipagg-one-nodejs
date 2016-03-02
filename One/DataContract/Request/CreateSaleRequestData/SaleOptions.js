'use strict';
// namespace Gateway\One\DataContract\Request\CreateSaleRequestData;

// use Gateway\One\DataContract\Common\BaseObject;

/**
 * Class Options
 * @package Gateway\One\DataContract\Request\CreateSaleRequestData
 */
module.exports = class SaleOptions{
    constructor() {
        /**
         * @var string
         */
        this.AntiFraudServiceCode;

        /**
         * @var string
         */
        this.CurrencyIso;

        /**
         * @var bool
         */
        this.IsAntiFraudEnabled;

        /**
         * @var int
         */
        this.Retries;
    }

    /**
     * @return string
     */
    getAntiFraudServiceCode() {
        return this.AntiFraudServiceCode;
    }

    /**
     * @param string antiFraudServiceCode
     * @return this
     */
    setAntiFraudServiceCode(antiFraudServiceCode) {
        this.AntiFraudServiceCode = antiFraudServiceCode;

        return this;
    }

    /**
     * @return string
     */
    getCurrencyIso() {
        return this.CurrencyIso;
    }

    /**
     * @param string currencyIso
     * @return this
     */
    setCurrencyIso(currencyIso) {
        this.CurrencyIso = currencyIso;

        return this;
    }

    /**
     * @return boolean
     */
    isIsAntiFraudEnabled() {
        return this.IsAntiFraudEnabled;
    }

    /**
     * @return this
     */
    enableAntiFraud() {
        this.IsAntiFraudEnabled = true;

        return this;
    }

    /**
     * @return this
     */
    disableAntiFraud() {
        this.IsAntiFraudEnabled = false;

        return this;
    }

    /**
     * @return int
     */
    getRetries() {
        return this.Retries;
    }

    /**
     * @param int retries
     * @return this
     */
    setRetries(retries) {
        this.Retries = retries;

        return this;
    }
};
