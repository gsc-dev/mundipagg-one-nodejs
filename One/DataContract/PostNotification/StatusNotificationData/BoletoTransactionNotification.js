/**
 * Class BoletoTransactionNotification
 * @package Gateway\One\DataContract\PostNotification\StatusNotificationData
 */
module.exports = class BoletoTransactionNotification{
    /*@var [long] Amount in Cents */
    let AmountInCents;
    /*@var [long] Amount paid in Cents */
    let AmountPaidInCents;
    /*@var [DateTime] Boleto Expiration Date */
    let BoletoExpirationDate;
    /*@var [long] gateway Intern number */
    let NossoNumero;
    /*@var [DateTime] Status Changed Date */
    let StatusChangedDate;
    /*@var [string] Transaction Key */
    let TransactionKey;
    /*@var [string] Transaction Reference */
    let TransactionReference;
    /*@var [string] Previous Boleto Transaction Status */
    let PreviousBoletoTransactionStatus;
    /*@var [string] Boleto Transaction Status */
    let BoletoTransactionStatus;
}