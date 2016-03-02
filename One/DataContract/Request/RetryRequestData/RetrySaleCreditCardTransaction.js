// namespace Gateway\One\DataContract\Request\RetryRequestData;

// use Gateway\One\DataContract\Common\BaseObject;

/**
 * Class RetrySaleCreditCardTransaction
 * @package Gateway\One\DataContract\Request\RetryRequestData
 */
module.exports = class RetrySaleCreditCardTransaction extends BaseObject {
    constructor() {
        /**
         * @var string C�digo de seguran�a do cart�o de cr�dito
         */
        this.SecurityCode;

        /**
         * @var Guid Identificador da transa��o na plataforma One
         */
        this.TransactionKey;
    }

    /**
     * @return string
     */
    getSecurityCode() {
        return this.SecurityCode;
    }

    /**
     * @return Guid
     */
    getTransactionKey() {
        return this.TransactionKey;
    }

    /**
     * @param securityCode
     * @return this
     */
    setSecurityCode(securityCode) {
        this.SecurityCode = securityCode;

        return this;
    }

    /**
     * @param transactionKey
     * @return this
     */
    setTransactionKey(transactionKey) {
        this.TransactionKey = transactionKey;

        return this;
    }
}