'use strict';
module.exports = class ManageCrediCardTransation {

    constructor(AmountInCents, TransactionKey) {
        /**
         * @var int Valor em centavos
         */
        this.AmountInCents = AmountInCents;

        /**
         * @var Identificação da transação na plataforma One
         */
        this.TransactionKey = TransactionKey;

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
     * @return Identificação
     */
    getTransactionKey() {
        return this.TransactionKey;
    }

    /**
     * @param Identificação transactionKey
     * @return this
     */
    setTransactionKey(transactionKey) {
        this.TransactionKey = transactionKey;
        return this;
    }
};
