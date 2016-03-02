'use strict';
// namespace Gateway\One\DataContract\TransactionReport\TransactionReportData;
module.exports = class TransactionReportOrder {
    constructor() {
        this.MerchantKey;

        this.MerchantName;

        this.OrderKey;

        this.OrderReference;
    }

    getMerchantKey() {
        return this.MerchantKey;
    }

    setMerchantKey(merchantKey) {
        this.MerchantKey = merchantKey;

        return this;
    }

    getMerchantName() {
        return this.MerchantName;
    }

    setMerchantName(merchantName) {
        this.MerchantName = merchantName;

        return this;
    }

    getOrderKey() {
        return this.OrderKey;
    }

    setOrderKey(orderKey) {
        this.OrderKey = orderKey;

        return this;
    }

    getOrderReference() {
        return this.OrderReference;
    }

    setOrderReference(orderReference) {
        this.OrderReference = orderReference;

        return this;
    }
}