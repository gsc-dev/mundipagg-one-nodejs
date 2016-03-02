'use strict';

// use Gateway\One\DataContract\Common\BaseObject;
// use Gateway\One\DataContract\Common\ManageCreditCardTransaction;

const ManageCreditCardTransaction = require('../../DataContract/Common/ManageCreditCardTransaction.JS')
/**
 * Class CaptureRequest
 * @package Gateway\One\DataContract\Request
 */
module.exports = class CaptureRequest {
    constructor(value) {
        /**
         * @var string Identificação da Ordem na plataforma One
         */
        this.OrderKey = value.OrderKey || '';

        /**
         * @var ManageCreditCardTransaction[] Coleção de ManageCreditCardTransaction com o valor que será capturado de cada cartão.
         */
        this.CreditCardTransactionCollection = value.CreditCardTransactionCollection || '';
    }

    /**
     * @return string
     */
    getOrderKey() {
        return this.OrderKey;
    }

    /**
     * @param string OrderKey
     * @return this
     */
    setOrderKey(OrderKey) {
        this.OrderKey = OrderKey;

        return this;
    }

    /**
     * @return ManageCreditCardTransaction[]
     */
    getCreditCardTransactionCollection() {
        return this.CreditCardTransactionCollection;
    }

    /**
     * @param ManageCreditCardTransaction creditCardTransaction
     * @return this
     */
    addCreditCardTransaction(creditCardTransaction) {
        if (this.CreditCardTransactionCollection === null) {
            this.CreditCardTransactionCollection = [];
        }

        if (creditCardTransaction === null) {
            creditCardTransaction = new ManageCreditCardTransaction();
        }

        this.CreditCardTransactionCollection = creditCardTransaction;

        return creditCardTransaction;
    }
};