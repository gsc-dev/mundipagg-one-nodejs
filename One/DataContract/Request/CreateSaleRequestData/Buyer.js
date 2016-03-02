'use strict';
// namespace Gateway\One\DataContract\Request\CreateSaleRequestData;

// use Gateway\One\DataContract\Common\BaseObject;
// use Gateway\One\DataContract\Common\Address;
// use Gateway\One\DataContract\Enum\BuyerCategoryEnum;
// use Gateway\One\DataContract\Enum\EmailTypeEnum;
const dateFormat = require('dateformat');
const Address = require('./../../Common/Address');

/**
 * Class Buyer
 * @package Gateway\One\DataContract\Request\CreateSaleRequestData
 */
module.exports = class Buyer {


    /**
     *
     */
    constructor() {
        /**
         * @var string Identificação do comprador na plataforma One
         */
        this.BuyerKey;

        /**
         * @var string Nome do comprador
         */
        this.Name;

        /**
         * @var string Tipo de pessoa
         */
        this.PersonType;

        /**
         * @var string Referência do comprador no sistema da loja
         */
        this.BuyerReference;

        /**
         * @var BuyerCategoryEnum Categoria do cliente na plataforma One
         */
        this.BuyerCategory;

        /**
         * @var string Número do documento
         */
        this.DocumentNumber;

        /**
         * @var string Tipo do documento
         */
        this.DocumentType;

        /**
         * @var string E-mail do comprador
         */
        this.Email;

        /**
         * @var EmailTypeEnum Tipo do email
         */
        this.EmailType;

        /**
         * @var string Sexo do comprador
         */
        this.Gender;

        /**
         * @var string Telefone residencial do comprador
         */
        this.HomePhone;

        /**
         * @var string Telefone celular do comprador
         */
        this.MobilePhone;

        /**
         * string Telefone de trabalho do comprador
         */
        this.WorkPhone;

        /**
         * @var string Data de nascimento do comprador
         */
        this.BirthDate;

        /**
         * @var Address[] Coleção de endereços do comprador.
         */
        this.AddressCollection;

        /**
         * @var string Identificação do comprador no Facebook
         */
        this.FacebookId;

        /**
         * @var string Identificação do comprador no Twitter
         */
        this.TwitterId;

        /**
         * @var string Data do cadastro do comprador na plataforma da loja
         */
        this.CreateDateInMerchant = '';

        /**
         * @var Data da última atualização do cadastro do comprador na plataforma da loja
         */
        this.LastBuyerUpdateInMerchant = '';

        this.AddressCollection = [];
    }

    /**
     * @return string
     */
    getBuyerKey() {
        return this.BuyerKey;
    }

    /**
     * @param string buyerKey
     * @return this
     */
    setBuyerKey(buyerKey) {
        this.BuyerKey = buyerKey;

        return this;
    }

    /**
     * @return string
     */
    getName() {
        return this.Name;
    }

    /**
     * @param string name
     * @return this
     */
    setName(name) {
        this.Name = name;

        return this;
    }

    /**
     * @return string
     */
    getPersonType() {
        return this.PersonType;
    }

    /**
     * @param string personType
     * @return this
     */
    setPersonType(personType) {
        this.PersonType = personType;

        return this;
    }

    /**
     * @return string
     */
    getBuyerReference() {
        return this.BuyerReference;
    }

    /**
     * @param string buyerReference
     * @return this
     */
    setBuyerReference(buyerReference) {
        this.BuyerReference = buyerReference;

        return this;
    }

    /**
     * @return BuyerCategoryEnum
     */
    getBuyerCategory() {
        return this.BuyerCategory;
    }

    /**
     * @param BuyerCategoryEnum buyerCategory
     * @return this
     */
    setBuyerCategory(buyerCategory) {
        this.BuyerCategory = buyerCategory;

        return this;
    }

    /**
     * @return string
     */
    getDocumentNumber() {
        return this.DocumentNumber;
    }

    /**
     * @param string documentNumber
     * @return this
     */
    setDocumentNumber(documentNumber) {
        this.DocumentNumber = documentNumber;

        return this;
    }

    /**
     * @return string
     */
    getDocumentType() {
        return this.DocumentType;
    }

    /**
     * @param string documentType
     * @return this
     */
    setDocumentType(documentType) {
        this.DocumentType = documentType;

        return this;
    }

    /**
     * @return string
     */
    getEmail() {
        return this.Email;
    }

    /**
     * @param string email
     * @return this
     */
    setEmail(email) {
        this.Email = email;

        return this;
    }

    /**
     * @return EmailTypeEnum
     */
    getEmailType() {
        return this.EmailType;
    }

    /**
     * @param EmailTypeEnum emailType
     * @return this
     */
    setEmailType(emailType) {
        this.EmailType = emailType;

        return this;
    }

    /**
     * @return string
     */
    getGender() {
        return this.Gender;
    }

    /**
     * @param string gender
     * @return this
     */
    setGender(gender) {
        this.Gender = gender;

        return this;
    }

    /**
     * @return string
     */
    getHomePhone() {
        return this.HomePhone;
    }

    /**
     * @param string homePhone
     * @return this
     */
    setHomePhone(homePhone) {
        this.HomePhone = homePhone;

        return this;
    }

    /**
     * @return string
     */
    getMobilePhone() {
        return this.MobilePhone;
    }

    /**
     * @param string mobilePhone
     * @return this
     */
    setMobilePhone(mobilePhone) {
        this.MobilePhone = mobilePhone;

        return this;
    }

    /**
     * @return string
     */
    getWorkPhone() {
        return this.WorkPhone;
    }

    /**
     * @param string workPhone
     * @return this
     */
    setWorkPhone(workPhone) {
        this.WorkPhone = workPhone;

        return this;
    }

    /**
     * @return string
     */
    getBirthDate() {
        return dateFormat(this.BirthDate, 'Y-m-d H:i:s');
    }

    /**
     * @param \DateTime birthDate
     * @return this
     */
    setBirthDate(birthDate) {
        this.BirthDate = dateFormat(birthDate, 'Y-m-d H:i:s');
    }

    /**
     * @return Address[]
     */
    getAddressCollection() {
        return this.AddressCollection;
    }

    /**
     * @param Address address
     * @return Address
     */
    addAddress(address) {
        if (address == null) {
            address = new Address();
        }

        this.AddressCollection = address;

        return address;
    }

    /**
     * @return string
     */
    getFacebookId() {
        return this.FacebookId;
    }

    /**
     * @param string facebookId
     * @return this
     */
    setFacebookId(facebookId) {
        this.FacebookId = facebookId;

        return this;
    }

    /**
     * @return string
     */
    getTwitterId() {
        return this.TwitterId;
    }

    /**
     * @param string twitterId
     * @return this
     */
    setTwitterId(twitterId) {
        this.TwitterId = twitterId;

        return this;
    }

    /**
     * @return string
     */
    getCreateDateInMerchant() {
        // return\ DateTime::createFromFormat('Y-m-d\TH:i:s', this.CreateDateInMerchant);
        return Date().now;
    }

    /**
     * @param \DateTime createDateInMerchant
     * @return this
     */
    setCreateDateInMerchant(createDateInMerchant) {
        // this.CreateDateInMerchant = createDateInMerchant.format('Y-m-d\TH:i:s');

        return this;
    }

    /**
     * @return Data
     */
    getLastBuyerUpdateInMerchant() {
        return dateFormat(this.LastBuyerUpdateInMerchant, 'Y-m-d H:i:s');
    }

    /**
     * @param \DateTime lastBuyerUpdateInMerchant
     * @return this
     */
    setLastBuyerUpdateInMerchant(lastBuyerUpdateInMerchant) {
        this.LastBuyerUpdateInMerchant = dateFormat(lastBuyerUpdateInMerchant, 'Y-m-d H:i:s');

        return this;
    }
};
