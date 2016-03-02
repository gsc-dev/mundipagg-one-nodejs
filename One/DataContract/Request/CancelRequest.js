// namespace Gateway\One\DataContract\Request;

// use Gateway\One\DataContract\Common\BaseObject;
// use Gateway\One\DataContract\Common\ManageCreditCardTransaction;

/**
 * Class CaptureRequest
 * @package Gateway\One\DataContract\Request
 */
module.exports = class CancelRequest extends BaseObject {
    constructor() {
        /**
         * @var string Identificação da Ordem na plataforma One
         */
        this.OrderKey;

        /**
         * @var ManageCreditCardTransaction[] Coleção de ManageCreditCardTransaction com o valor que será capturado de cada cartão.
         */
        this.CreditCardTransactionCollection;
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
    addCreditCardTransaction(creditCardTransaction = null) {
        if (this.CreditCardTransactionCollection == null) {
            this.CreditCardTransactionCollection = array();
        }

        if (creditCardTransaction == null) {
            creditCardTransaction = new ManageCreditCardTransaction();
        }

        this.CreditCardTransactionCollection[] = creditCardTransaction;

        return creditCardTransaction;
    }
}