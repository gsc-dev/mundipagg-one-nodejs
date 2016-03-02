'use strict';
/**
 * Class CreditCardTransaction
 * @package Gateway\One\DataContract\Request\CreateSaleRequestData
 */
const CreditCard                   = require('./CreditCard');
const CreditCardTransactionOptions = require('./CreditCardTransactionOptions');
const Recurrency                   = require('./Recurrency');
const dateFormat                   = require('dateformat');

module.exports = class CreditCardTransaction {

    /**
     *
     */
    constructor() {
        /**
         * @var int Valor total em centavos a ser passado na transação de cartão de crédito.
         */
        this.AmountInCents;

        /**
         * @var CreditCard Objeto com os dados do cartão de crédito.
         */
        this.CreditCard;

        /**
         * @var string Tipo da transação a ser realizada. Ex: AuthOnly.
         */
        this.CreditCardOperation;

        /**
         * @var int Número de parcelas da transação.
         */
        this.InstallmentCount;

        /**
         * @var CreditCardTransactionOptions Objeto com as configurações opcionais da transação.
         */
        this.Options;

        /**
         * @var Recurrency Objeto com as configurações de um pagamento recorrente.
         */
        this.Recurrency;

        /**
         * @var string Objeto com as configurações de um pagamento recorrente.
         */
        this.TransactionDateInMerchant;

        /**
         * @var string Identificação da transação na plataforma da loja.
         */
        this.TransactionReference;
    }

    /**
     * @return int
     */
    getAmountInCents() {
        return this.AmountInCents;
    }

    /**
     * @param int amountInCents
     * @return this
     */
    setAmountInCents(amountInCents) {
        this.AmountInCents = amountInCents;

        return this;
    }

    /**
     * @return CreditCard
     */
    getCreditCard() {
        if (this.CreditCard == null) {
            this.CreditCard = new CreditCard();
        }

        return this.CreditCard;
    }

    /**
     * @param \Gateway\One\DataContract\Request\CreateSaleRequestData\CreditCard creditCard
     */
    setCreditCard(creditCard) {
        this.CreditCard = creditCard;
    }

    /**
     * @return string
     */
    getCreditCardOperation() {
        return this.CreditCardOperation;
    }

    /**
     * @param string creditCardOperation
     * @return this
     */
    setCreditCardOperation(creditCardOperation) {
        this.CreditCardOperation = creditCardOperation;

        return this;
    }

    /**
     * @return int
     */
    getInstallmentCount() {
        return this.InstallmentCount;
    }

    /**
     * @param int installmentCount
     * @return this
     */
    setInstallmentCount(installmentCount) {
        this.InstallmentCount = installmentCount;

        return this;
    }

    /**
     * @return CreditCardTransactionOptions
     */
    getOptions() {
        if (!this.Options) {
            this.Options = new CreditCardTransactionOptions();
        }
        return this.Options;
    }

    /**
     * @return Recurrency
     */
    getRecurrency() {
        if (!this.Recurrency) {
            this.Recurrency = new Recurrency();
        }

        return this.Recurrency;
    }

    /**
     * @param \Gateway\One\DataContract\Request\CreateSaleRequestData\Recurrency recurrency
     */
    setRecurrency(recurrency) {
        this.Recurrency = recurrency;
    }

    /**
     * @return string
     */
    getTransactionDateInMerchant() {
        return dateFormat(this.TransactionDateInMerchant, 'Y-m-d H:i:s');

    }

    /**
     * @param \DateTime transactionDateInMerchant
     * @return this
     */
    setTransactionDateInMerchant(transactionDateInMerchant) {
        this.TransactionDateInMerchant = dateFormat(transactionDateInMerchant, 'Y-m-d H:i:s');

        return this;
    }

    /**
     * @return string
     */
    getTransactionReference() {
        return this.TransactionReference;
    }

    /**
     * @param string transactionReference
     * @return this
     */
    setTransactionReference(transactionReference) {
        this.TransactionReference = transactionReference;

        return this;
    }

    /**
     * @param int paymentMethodCode
     * @return this
     */
    setPaymentMethodCode(paymentMethodCode) {
        this.getOptions()
            .setPaymentMethodCode(paymentMethodCode);
        return this;
    }
};
