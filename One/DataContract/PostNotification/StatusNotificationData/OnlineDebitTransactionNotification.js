/**
 * Class OnlineDebitTransactionNotification
 * @package Gateway\One\DataContract\PostNotification\StatusNotificationData
 */
module.exports = class OnlineDebitTransactionNotification{
    /*@var [long] Amount in Cents */
    let AmountInCents;
    /*@var [long] Amount in Cents */
    let AmountPaidInCents;
    /*@var [DateTime] Status Changed Date */
    let StatusChangedDate;
    /*@var [string] Transaction Key */
    let TransactionKey;
    /*@var [string] Transaction Reference */
    let TransactionReference;
    /*@var [string] Previous Online Debit Transaction Status */
    let PreviousOnlineDebitTransactionStatus;
    /*@var [string] Online Debit Transaction Status */
    let OnlineDebitTransactionStatus;
}