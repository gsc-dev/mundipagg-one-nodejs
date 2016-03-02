'use strict';

/**
 * Class BoletoTransactionOptions
 * @package Gateway\One\DataContract\Request\CreateSaleRequestData
 */
module.exports = class BoletoTransactionOptions {
    constructor() {
        /**
         * @var string Código da moeda utilizada
         */
        this.CurrencyIso;

        /**
         * @var int Número de dias que serão adicionados à data de expiração do boleto
         */
        this.DaysToAddInBoletoExpirationDate;
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
     * @return int
     */
    getDaysToAddInBoletoExpirationDate() {
        return this.DaysToAddInBoletoExpirationDate;
    }

    /**
     * @param int daysToAddInBoletoExpirationDate
     * @return this
     */
    setDaysToAddInBoletoExpirationDate(daysToAddInBoletoExpirationDate) {
        this.DaysToAddInBoletoExpirationDate = daysToAddInBoletoExpirationDate;

        return this;
    }
};
