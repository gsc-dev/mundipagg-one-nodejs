'use strict';
// namespace Gateway\One\DataContract\Request\CreateSaleRequestData;

// use Gateway\One\DataContract\Common\BaseObject;
// use Gateway\One\DataContract\Common\Address;

const Address                  = require('./../../Common/Address');
const BoletoTransactionOptions = require('./BoletoTransactionOptions');
const dateFormat               = require('dateformat');
/**
 * Class BoletoTransaction
 * @package Gateway\One\DataContract\Request\CreateSaleRequestData
 */
module.exports = class BoletoTransaction {


    /**
     *
     */
    constructor() {
        /**
         * @var int Valor do boleto em centavos
         */
        this.AmountInCents;

        /**
         * @var string Número do banco
         */
        this.BankNumber;

        /**
         * @var Address Endereço de cobrança do cliente.
         */
        this.BillingAddress;

        /**
         * @var string Número de identificação do boleto.
         */
        this.DocumentNumber;

        /**
         * @var string Instruções que serão impressas no boleto.
         */
        this.Instructions;

        /**
         * @var BoletoTransactionOptions Configurações opcionais do boleto.
         */
        this.Options;

        /**
         * @var string Objeto com as configurações de um pagamento recorrente.
         */
        this.TransactionDateInMerchant;

        /**
         * @var string Identificação da transação na plataforma da loja.
         */
        this.TransactionReference;
        this.Options = null;
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
     * @return string
     */
    getBankNumber() {
        return this.BankNumber;
    }

    /**
     * @param string bankNumber
     * @return this
     */
    setBankNumber(bankNumber) {
        this.BankNumber = bankNumber;

        return this;
    }

    /**
     * @return Address
     */
    getBillingAddress() {
        if (this.BillingAddress == null) {
            this.BillingAddress = new Address();
        }

        return this.BillingAddress;
    }

    /**
     * @return string
     */
    getDocumentNumber() {
        return this.DocumentNumber;
    }

    /**
     * @param string documentNumber
     * @return this
     */
    setDocumentNumber(documentNumber) {
        this.DocumentNumber = documentNumber;

        return this;
    }

    /**
     * @return string
     */
    getInstructions() {
        return this.Instructions;
    }

    /**
     * @param string instructions
     * @return this
     */
    setInstructions(instructions) {
        this.Instructions = instructions;

        return this;
    }

    /**
     * @return BoletoTransactionOptions
     */
    getOptions() {
        if (this.Options == null) {
            this.Options = new BoletoTransactionOptions();
        }

        return this.Options;
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
};
