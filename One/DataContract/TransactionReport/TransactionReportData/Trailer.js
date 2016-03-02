// namespace Gateway\One\DataContract\TransactionReport\TransactionReportData;

/**
 * Class Trailer
 * @package Gateway\One\DataContract\TransactionReport\TransactionReportData
 */
module.exports = class Trailer {
    constructor() {
        this.OrderDataCount;

        this.BoletoTransactionDataCount;

        this.CreditCardTransactionDataCount;

        this.OnlineDebitTransactionDataCount;
    }

    getOrderDataCount() {
        return this.OrderDataCount;
    }

    getBoletoTransactionDataCount() {
        return this.BoletoTransactionDataCount;
    }

    getCreditCardTransactionDataCount() {
        return this.CreditCardTransactionDataCount;
    }

    getOnlineDebitTransactionDataCount() {
        return this.OnlineDebitTransactionDataCount;
    }

    setOrderDataCount(orderDataCount) {
        this.OrderDataCount = orderDataCount;

        return this;
    }

    setBoletoTransactionDataCount(boletoTransactionDataCount) {
        this.BoletoTransactionDataCount = boletoTransactionDataCount;

        return this;
    }

    setCreditCardTransactionDataCount(creditCardTransactionDataCount) {
        this.CreditCardTransactionDataCount = creditCardTransactionDataCount;

        return this;
    }

    setOnlineDebitTransactionDataCount(OnlineDebitTransactionDataCount) {
        this.OnlineDebitTransactionDataCount = OnlineDebitTransactionDataCount;

        return this;
    }
}