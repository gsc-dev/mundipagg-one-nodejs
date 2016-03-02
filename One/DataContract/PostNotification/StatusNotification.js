
// namespace Gateway\One\DataContract\PostNotification;
// use Gateway\One\DataContract\Enum\OrderStatusEnum;

/**
 * Class StatusNotification
 * @package Gateway\One\DataContract\PostNotification
 */
module.exports = class StatusNotification{
    /*@var [long] Amount In Cents */
    let AmountInCents;
    /*@var [long] Amount Paid In Cents */
    let AmountPaidInCents;
    /*@var [BoletoTransactionNotification] Boleto Transaction */
    let BoletoTransaction;
    /*@var [CreditCardTransactionNotification] Credit Card Transaction */
    let CreditCardTransaction;
    /*@var [OnlineDebitTransactionNotification] Online Debit Transaction */
    let OnlineDebitTransaction;
    /*@var [string] Order Key */
    let OrderKey;
    /*@var [string] Order Reference */
    let OrderReference;
    /*@var [string] Order Status */
    let OrderStatus;

    constructor(){
        this.AmountInCents = 0;
        this.AmountPaidInCents = null;
        this.BoletoTransaction = null;
        this.CreditCardTransaction = null;
        this.OrderKey = null;
        this.OrderReference = "";
        this.OrderStatus = OrderStatusEnum::__default;
    }
}