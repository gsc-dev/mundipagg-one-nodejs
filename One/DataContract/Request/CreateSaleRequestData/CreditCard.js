'use strict';
// namespace Gateway\One\DataContract\Request\CreateSaleRequestData;

// use Gateway\One\DataContract\Common\BaseObject;
// use Gateway\One\DataContract\Common\Address;
// use Gateway\One\DataContract\Enum\CreditCardBrandEnum;

const Address             = require('./../../Common/Address');
const CreditCardBrandEnum = require('./../../Enum/CreditCardBrandEnum');

module.exports = class CreditCard {

    constructor(value) {
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
         * @var string Token criado na gateway que representa o ‘Cartão de Crédito’ utilizado previamente pelo cliente.
         */
        this.InstantBuyKey;

        /**
         * @var string Código de segurança do cartão.
         */
        this.SecurityCode;

        this.BillingAddress  = null;
        this.CreditCardBrand = null;
    }

    /**
     * @return Address
     */
    getBillingAddress() {
        if (this.BillingAddress == null) {
            this.BillingAddress = new Address();
        }
        return this.BillingAddress;
    }

    /**
     * @return CreditCardBrandEnum
     */
    getCreditCardBrand() {
        return this.CreditCardBrand;
    }

    /**
     * @param string creditCardBrand
     * @return this
     */
    setCreditCardBrand(creditCardBrand) {
        this.CreditCardBrand = creditCardBrand;

        return this;
    }

    /**
     * @return string
     */
    getCreditCardNumber() {
        return this.CreditCardNumber;
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
     * @return int
     */
    getExpMonth() {
        return this.ExpMonth;
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
    getExpYear() {
        return this.ExpYear;
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
     * @return string
     */
    getHolderName() {
        return this.HolderName;
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
    getInstantBuyKey() {
        return this.InstantBuyKey;
    }

    /**
     * @param string instantBuyKey
     * @return this
     */
    setInstantBuyKey(instantBuyKey) {
        this.InstantBuyKey = instantBuyKey;

        return this;
    }

    /**
     * @return string
     */
    getSecurityCode() {
        return this.SecurityCode;
    }

    /**
     * @param string securityCode
     * @return this
     */
    setSecurityCode(securityCode) {
        this.SecurityCode = securityCode;
        return this;
    }
};
