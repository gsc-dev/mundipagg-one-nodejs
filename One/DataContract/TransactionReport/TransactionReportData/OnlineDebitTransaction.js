// namespace Gateway\One\DataContract\TransactionReport\TransactionReportData;

/**
 * Class OnlineDebitTransaction
 * @package Gateway\One\DataContract\TransactionReport\TransactionReportData
 */
module.exports = class OnlineDebitTransaction {
    constructor() {
        this.Order;
        this.TransactionKey;
        this.TransactionReference;
        this.Bank;
        this.Status;
        this.AmountInCents;
        this.TransactionKeyToBank;
        this.AmountPaidInCents;
        this.Signature;
        this.PaymentDate;
        this.BankReturnCode;
        this.BankPaymentDate;
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

    getBank() {
        return this.Bank;
    }

    setBank(bank) {
        this.Bank = bank;

        return this;
    }

    getStatus() {
        return this.Status;
    }

    setStatus(status) {
        this.Status = status;

        return this;
    }

    getAmountInCents() {
        return this.AmountInCents;
    }

    setAmountInCents(amountInCents) {
        this.AmountInCents = amountInCents;

        return this;
    }

    getTransactionKeyToBank() {
        return this.TransactionKeyToBank;
    }

    setTransactionKeyToBank(transactionKeyToBank) {
        this.TransactionKeyToBank = transactionKeyToBank;

        return this;
    }

    getAmountPaidInCents() {
        return this.AmountPaidInCents;
    }

    setAmountPaidInCents(amountPaidInCents) {
        this.AmountPaidInCents = amountPaidInCents;

        return this;
    }

    getSignature() {
        return this.Signature;
    }

    setSignature(signature) {
        this.Signature = signature;

        return this;
    }

    getPaymentDate() {
        return this.PaymentDate;
    }

    setPaymentDate(paymentDate) {
        this.PaymentDate = paymentDate;

        return this;
    }

    getBankReturnCode() {
        return this.BankReturnCode;
    }

    setBankReturnCode(bankReturnCode) {
        this.BankReturnCode = bankReturnCode;

        return this;
    }

    getBankPaymentDate() {
        return this.BankPaymentDate;
    }

    setBankPaymentDate(bankPaymentDate) {
        this.BankPaymentDate = bankPaymentDate;

        return this;
    }
}