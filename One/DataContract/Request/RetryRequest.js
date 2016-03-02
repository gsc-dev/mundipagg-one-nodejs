// namespace Gateway\One\DataContract\Request;

// use Gateway\One\DataContract\Common\BaseObject;

/**
 * Class RetryRequest
 * @package Gateway\One\DataContract\Request
 */
module.exports = class RetryRequest extends BaseObject {

    constructor() {
        /**
         * @var Identifica��o da requisi��o na plataforma One
         */
        this.RequestKey;

        /**
         * @var Identifica��o da Ordem na plataforma One
         */
        this.OrderKey;

        /**
         * @return RequestKey
         */

        /**
         * @var RetryRequestData\SaleCreditCardTransaction[] Cole��o de transa��es de cart�o de cr�dito das transa��es que ser�o retentadas
         */
        this.RetrySaleCreditCardTransactionCollection;

        this.RetrySaleCreditCardTransactionCollection = null;
    }

    getRequestKey() {
        return this.RequestKey;
    }

    /**
     * @param $RequestKey
     * @return $this
     */
    setRequestKey($RequestKey) {
        this.RequestKey = $RequestKey;

        return $this;
    }

    /**
     * @return string
     */
    getOrderKey() {
        return this.OrderKey;
    }

    /**
     * @param string $OrderKey
     * @return $this
     */
    setOrderKey($OrderKey) {
        this.OrderKey = $OrderKey;

        return $this;
    }

    /**
     * @return array|RetryRequestData\SaleCreditCardTransaction[]
     */
    getRetrySaleCreditCardTransactionCollection() {
        if (empty(this.RetrySaleCreditCardTransactionCollection)) {
            this.RetrySaleCreditCardTransactionCollection = array();
        }

        return this.RetrySaleCreditCardTransactionCollection;
    }

    /**
     * @param RetryRequestData\RetrySaleCreditCardTransaction|null $retrySaleCreditCardTransaction
     * @return RetryRequestData\RetrySaleCreditCardTransaction
     */
    addRetrySaleCreditCardTransactionCollection(RetryRequestData\ RetrySaleCreditCardTransaction $retrySaleCreditCardTransaction = null) {
        if ($retrySaleCreditCardTransaction == null) {
            $retrySaleCreditCardTransaction = new RetryRequestData\ RetrySaleCreditCardTransaction();
        }

        this.RetrySaleCreditCardTransactionCollection[] = $retrySaleCreditCardTransaction;

        return $retrySaleCreditCardTransaction;
    }
}