// use Gateway\One\DataContract\Common\BaseObject;
// use Gateway\One\DataContract\Common\Address;
// use Gateway\One\DataContract\Enum\CreditCardBrandEnum;

/**
 * Class InstantBuyDataRequest
 * @package Gateway\One\DataContract\Request\CreateSaleRequestData
 */
module.exports = class CreateInstantBuyDataRequest extends BaseObject {


    constructor() {
        /**
         * @var Address Endereço de cobrança do comprador.
         */
        this.BillingAddress;

        /**
         * @var string Bandeira do cartão do comprador.
         */
        this.CreditCardBrand;

        /**
         * @var string Número do cartão do comprador. Informar apenas os números do cartão.
         */
        this.CreditCardNumber;

        /**
         * @var int Mês de expiração do cartão.
         */
        this.ExpMonth;

        /**
         * @var int Ano de expiração do cartão.
         */
        this.ExpYear;

        /**
         * @var string Nome do portador do cartão.
         */
        this.HolderName;

        /**
         * @var string 
         */
        this.IsOneDollarAuthEnabled;

        /**
         * @var type string
         */
        this.BuyerKey;

        /**
         * @var string Código de segurança do cartão.
         */
        this.SecurityCode;
        this.BillingAddress = null;
        this.CreditCardBrand = null;
    }

    /**
     * @return Address
     */
    getBillingAddress() {
        if (empty(this.BillingAddress)) {
            this.BillingAddress = new Address();
        }

        return this.BillingAddress;
    }

    /**
     * @param string CreditCardBrand
     * @return this
     */
    setCreditCardBrand(CreditCardBrand) {
        this.CreditCardBrand = CreditCardBrand;

        return this;
    }

    /**
     * @return Address
     */
    getBuyerKey() {
        return this.BuyerKey;
    }

    /**
     * @param string CreditCardBrand
     * @return this
     */
    setBuyerKey(buyerKey) {
        this.BuyerKey = buyerKey;
        return this;
    }

    /**
     * @return CreditCardBrandEnum
     */
    getCreditCardBrand() {
        return this.CreditCardBrand;
    }

    /**
     * @param string creditCardNumber
     * @return this
     */
    setCreditCardNumber(creditCardNumber) {
        this.CreditCardNumber = creditCardNumber;

        return this;
    }

    /**
     * @return string
     */
    getCreditCardNumber() {
        return this.CreditCardNumber;
    }

    /**
     * @param int expMonth
     * @return this
     */
    setExpMonth(expMonth) {
        this.ExpMonth = expMonth;

        return this;
    }

    /**
     * @return int
     */
    getExpMonth() {
        return this.ExpMonth;
    }

    /**
     * @param int expYear
     * @return this
     */
    setExpYear(expYear) {
        this.ExpYear = expYear;

        return this;
    }

    /**
     * @return int
     */
    getExpYear() {
        return this.ExpYear;
    }

    /**
     * @param string holderName
     * @return this
     */
    setHolderName(holderName) {
        this.HolderName = holderName;

        return this;
    }

    /**
     * @return string
     */
    getHolderName() {
        return this.HolderName;
    }

    /**
     * @param string isOneDollarAuthEnabled
     * @return this
     */
    setIsOneDollarAuthEnabled(isOneDollarAuthEnabled) {
        this.IsOneDollarAuthEnabled = isOneDollarAuthEnabled;

        return this;
    }

    /**
     * @return string
     */
    getIsOneDollarAuthEnabled() {
        return this.IsOneDollarAuthEnabled;
    }

    /**
     * @param string securityCode
     * @return this
     */
    setSecurityCode(securityCode) {
        this.SecurityCode = securityCode;

        return this;
    }

    /**
     * @return string
     */
    getSecurityCode() {
        return this.SecurityCode;
    }

}