// namespace Gateway\One\DataContract\TransactionReport;


module.exports = class TransactionReport {
    constructor() {
            /**
             * @var TransactionReportData\Header
             */
            this.Header;

            /**
             * @var TransactionReportData\Trailer
             */
            this.Trailer;

            /**
             * @var TransactionReportData\TransactionReportBoletoTransaction Transacao do tipo Boleto
             */
            this.BoletoTransactionCollection;

            /**
             * @var TransactionReportData\TransactionReportCreditCardTransaction Transacao do tipo Cartao de Credito
             */
            this.CreditCardTransactionCollection;

            /**
             * @var TransactionReportData\OnlineDebitTransaction Transacao do tipo Online Debit
             */
            this.OnlineDebitTransactionCollection;

        }
        /**
         * @return TransactionReportData\TransactionReportCreditCardTransaction[]
         */
    getCreditCardTransactionCollection() {
        if (empty(this.CreditCardTransactionCollection)) {
            this.CreditCardTransactionCollection = array();
        }

        return this.CreditCardTransactionCollection;
    }

    /**
     * @param TransactionReportData\TransactionReportCreditCardTransaction creditCardTransaction
     * @return TransactionReportData\TransactionReportCreditCardTransaction
     */
    addCreditCardTransaction(TransactionReportData\ TransactionReportCreditCardTransaction creditCardTransaction = null) {
        if (creditCardTransaction == null) {
            creditCardTransaction = new TransactionReportData\ TransactionReportCreditCardTransaction();
        }

        this.CreditCardTransactionCollection[] = creditCardTransaction;

        return creditCardTransaction;
    }

    /**
     * @return TransactionReportData\TransactionReportBoletoTransaction[]
     */
    getBoletoTransactionCollection() {
        if (empty(this.BoletoTransactionCollection)) {
            this.BoletoTransactionCollection = array();
        }

        return this.BoletoTransactionCollection;
    }

    /**
     * @param TransactionReportData\TransactionReportBoletoTransaction boletoTransaction
     * @return TransactionReportData\TransactionReportBoletoTransaction
     */
    addBoletoTransaction(TransactionReportData\ TransactionReportBoletoTransaction boletoTransaction = null) {
        if (boletoTransaction == null) {
            boletoTransaction = new TransactionReportData\ TransactionReportBoletoTransaction();
        }

        this.CreditCardTransactionCollection[] = boletoTransaction;

        return boletoTransaction;
    }

    /**
     * @return TransactionReportData\OnlineDebitTransactionCollection[]
     */
    getOnlineDebitCollection() {
        if (empty(this.OnlineDebitTransactionCollection)) {
            this.OnlineDebitTransactionCollection = array();
        }

        return this.OnlineDebitTransactionCollection;
    }

    /**
     * @param TransactionReportData\OnlineDebitTransaction onlineDebitTransaction
     * @return TransactionReportData\OnlineDebitTransaction
     */
    addOnlineDebitTransaction(TransactionReportData\ OnlineDebitTransaction onlineDebitTransaction = null) {
        if (onlineDebitTransaction == null) {
            onlineDebitTransaction = new TransactionReportData\ OnlineDebitTransaction();
        }

        this.CreditCardTransactionCollection[] = onlineDebitTransaction;

        return onlineDebitTransaction;
    }

    /**
     * @return TransactionReportData\Header
     */
    getHeader() {
        return this.Header;
    }

    /**
     * @param Header
     * @return this
     */
    setHeader(header) {
        this.Header = header;

        return this;
    }

    /**
     * @return TransactionReportData\Trailer
     */
    getTrailer() {
        return this.Trailer;
    }

    /**
     * @param Trailer
     * @return this
     */
    setTrailer(trailer) {
        this.Trailer = trailer;

        return this;
    }
}