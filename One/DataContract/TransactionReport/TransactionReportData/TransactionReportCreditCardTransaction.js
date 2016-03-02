// namespace Gateway\One\DataContract\TransactionReport\TransactionReportData;


module.exports = class TransactionReportCreditCardTransaction {
    constructor() {
        this.Order;

        this.TransactionKey;

        this.TransactionKeyToAcquirer;

        this.CreditCardTransactionReference;

        this.CreditCardBrand;

        this.CreditCardNumber;

        this.InstallmentCount;

        this.AcquirerName;

        this.Status;

        this.AmountInCents;

        this.IataAmountInCents;

        this.AuthorizationCode;

        this.TransactionIdentifier;

        this.UniqueSequentialNumber;

        this.AuthorizedAmountInCents;

        this.CapturedAmountInCents;

        this.VoidedAmountInCents;

        this.RefundedAmountInCents;

        this.CapturedDate;

        this.AuthorizedDate;

        this.VoidedDate;

        this.LastProbeDate;

        this.AcquirerAuthorizationReturnCode;
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

    getTransactionKeyToAcquirer() {
        return this.TransactionKeyToAcquirer;
    }

    setTransactionKeyToAcquirer(transactionKeyToAcquirer) {
        this.TransactionKeyToAcquirer = transactionKeyToAcquirer;

        return this;
    }

    getCreditCardTransactionReference() {
        return this.CreditCardTransactionReference;
    }

    setCreditCardTransactionReference(creditCardTransactionReference) {
        this.CreditCardTransactionReference = creditCardTransactionReference;

        return this;
    }

    getCreditCardBrand() {
        return this.CreditCardBrand;
    }

    setCreditCardBrand(creditCardBrand) {
        this.CreditCardBrand = creditCardBrand;

        return this;
    }

    getCreditCardNumber() {
        return this.CreditCardNumber;
    }

    setCreditCardNumber(creditCardNumber) {
        this.CreditCardNumber = creditCardNumber;

        return this;
    }

    getInstallmentCount() {
        return this.InstallmentCount;
    }

    setInstallmentCount(installmentCount) {
        this.InstallmentCount = installmentCount;

        return this;
    }

    getAcquirerName() {
        return this.AcquirerName;
    }

    setAcquirerName(acquirerName) {
        this.AcquirerName = acquirerName;

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

    getIataAmountInCents() {
        return this.IataAmountInCents;
    }

    setIataAmountInCents(iataAmountInCents) {
        this.IataAmountInCents = iataAmountInCents;

        return this;
    }

    getAuthorizationCode() {
        return this.AuthorizationCode;
    }

    setAuthorizationCode(authorizationCode) {
        this.AuthorizationCode = authorizationCode;

        return this;
    }

    getTransactionIdentifier() {
        return this.TransactionIdentifier;
    }

    setTransactionIdentifier(transactionIdentifier) {
        this.TransactionIdentifier = transactionIdentifier;

        return this;
    }

    getUniqueSequentialNumber() {
        return this.UniqueSequentialNumber;
    }

    setUniqueSequentialNumber(uniqueSequentialNumber) {
        this.UniqueSequentialNumber = uniqueSequentialNumber;

        return this;
    }

    getAuthorizedAmountInCents() {
        return this.AuthorizedAmountInCents;
    }

    setAuthorizedAmountInCents(authorizedAmountInCents) {
        this.AuthorizedAmountInCents = authorizedAmountInCents;

        return this;
    }

    getCapturedAmountInCents() {
        return this.CapturedAmountInCents;
    }

    setCapturedAmountInCents(capturedAmountInCents) {
        this.CapturedAmountInCents = capturedAmountInCents;

        return this;
    }

    getVoidedAmountInCents() {
        return this.VoidedAmountInCents;
    }

    setVoidedAmountInCents(voidedAmountInCents) {
        this.VoidedAmountInCents = voidedAmountInCents;

        return this;
    }

    getRefundedAmountInCents() {
        return this.RefundedAmountInCents;
    }

    setRefundedAmountInCents(refundedAmountInCents) {
        this.RefundedAmountInCents = refundedAmountInCents;

        return this;
    }

    getCapturedDate() {
        return this.CapturedDate;
    }

    setCapturedDate(capturedDate) {
        this.CapturedDate = capturedDate;

        return this;
    }

    getAuthorizedDate() {
        return this.AuthorizedDate;
    }

    setAuthorizedDate(authorizedDate) {
        this.AuthorizedDate = authorizedDate;

        return this;
    }

    getVoidedDate() {
        return this.VoidedDate;
    }

    setVoidedDate(voidedDate) {
        this.VoidedDate = voidedDate;

        return this;
    }

    getLastProbeDate() {
        return this.LastProbeDate;
    }

    setLastProbeDate(lastProbeDate) {
        this.LastProbeDate = lastProbeDate;

        return this;
    }

    getAcquirerAuthorizationReturnCode() {
        return this.AcquirerAuthorizationReturnCode;
    }

    setAcquirerAuthorizationReturnCode(acquirerAuthorizationReturnCode) {
        this.AcquirerAuthorizationReturnCode = acquirerAuthorizationReturnCode;

        return this;
    }
}