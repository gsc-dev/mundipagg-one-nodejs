// namespace Gateway\One\DataContract\TransactionReport\TransactionReportData;


module.exports = class TransactionReportBoletoTransaction {
    constructor() {
        this.Order;

        this.TransactionKey;

        this.TransactionReference;

        this.Status;

        this.NossoNumero;

        this.BankNumber;

        this.Agency;

        this.Account;

        this.BarCode;

        this.ExpirationDate;

        this.AmountInCents;

        this.AmountPaidInCents;

        this.PaymentDate;

        this.CreditDate;
    }

    getOrder() {
        return this.Order;
    }

    setOrder(order) {
        this.Order = order;

        return this;
    }

    getTransactionKey() {
        return this.TransactionKey;
    }

    setTransactionKey(transactionKey) {
        this.TransactionKey = transactionKey;

        return this;
    }

    getTransactionReference() {
        return this.TransactionReference;
    }

    setTransactionReference(transactionReference) {
        this.TransactionReference = transactionReference;

        return this;
    }

    getStatus() {
        return this.Status;
    }

    setStatus(status) {
        this.Status = status;

        return this;
    }

    getNossoNumero() {
        return this.NossoNumero;
    }

    setNossoNumero(nossoNumero) {
        this.NossoNumero = nossoNumero;

        return this;
    }

    getBankNumber() {
        return this.BankNumber;
    }

    setBankNumber(bankNumber) {
        this.BankNumber = bankNumber;

        return this;
    }

    getAgency() {
        return this.Agency;
    }

    setAgency(agency) {
        this.Agency = agency;

        return this;
    }

    getAccount() {
        return this.Account;
    }

    setAccount(account) {
        this.Account = account;

        return this;
    }

    getBarCode() {
        return this.BarCode;
    }

    setBarCode(barCode) {
        this.BarCode = barCode;

        return this;
    }

    getExpirationDate() {
        return this.ExpirationDate;
    }

    setExpirationDate(expirationDate) {
        this.ExpirationDate = expirationDate;

        return this;
    }

    getAmountInCents() {
        return this.AmountInCents;
    }

    setAmountInCents(amountInCents) {
        this.AmountInCents = amountInCents;

        return this;
    }

    getAmountPaidInCents() {
        return this.AmountPaidInCents;
    }

    setAmountPaidInCents(amountPaidInCents) {
        this.AmountPaidInCents = amountPaidInCents;

        return this;
    }

    getPaymentDate() {
        return this.PaymentDate;
    }

    setPaymentDate(paymentDate) {
        this.PaymentDate = paymentDate;

        return this;
    }

    getCreditDate() {
        return this.CreditDate;
    }

    setCreditDate(creditDate) {
        this.CreditDate = creditDate;

        return this;
    }

}