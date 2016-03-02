/**
 * Class CreditCardTransactionNotification
 * @package Gateway\One\DataContract\PostNotification\StatusNotificationData
 */
module.exports = class CreditCardTransactionNotification{
    /*@var [string] Acquirer name */
    let Acquirer;
    /*@var [long] Amount In Cents */
    let AmountInCents;
    /*@var [long] Authorized Amount In Cents */
    let AuthorizedAmountInCents;
    /*@var [long] Captured Amount In Cents */
    let CapturedAmountInCents;
    /*@var [string] CreditCard Brand */
    let CreditCardBrand;
    /*@var [long] Refunded Amount In Cents */
    let RefundedAmountInCents;
    /*@var [DateTime]Status Changed Date */
    let StatusChangedDate;
    /*@var [long] Transaction Identifier */
    let TransactionIdentifier;
    /*@var [string] Transaction Key */
    let TransactionKey;
    /*@var [string] Transaction Reference */
    let TransactionReference;
    /*@var [long] Unique Sequential Number */
    let UniqueSequentialNumber;
    /*@var [long] Transaction Voided Amount in cents */
    let VoidedAmountInCents;
    /*@var [string] Previus CreditCard Transaction Status */
    let PreviousCreditCardTransactionStatus;
    /*@var [string] CreditCard Transaction Status */
    let CreditCardTransactionStatus;
}