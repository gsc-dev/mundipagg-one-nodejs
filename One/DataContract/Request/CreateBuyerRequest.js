'use strict';
// namespace Gateway\One\DataContract\Request;

// use Gateway\One\DataContract\Common\BaseObject;
// use Gateway\One\DataContract\Common\Address;
// use Gateway\One\DataContract\Enum\BuyerCategoryEnum;
// use Gateway\One\DataContract\Enum\EmailTypeEnum;

const dateformat = require('dateformat');
const Address    = require('./../Common/Address');
/**
 * Class Buyer
 * @package Gateway\One\DataContract\Request\CreateSaleRequestData
 */
module.exports = class CreateBuyerRequest {

    /**
     *
     */
    constructor() {
        /**
         * @var string Data de nascimento do comprador
         */
        this.Birthdate;

        /**
         * @var string Identificação do comprador na plataforma One
         */
        this.BuyerKey;

        /**
         * @var BuyerCategoryEnum Categoria do cliente na plataforma One
         */
        this.BuyerCategory;

        /**
         * @var string Referência do comprador no sistema da loja
         */
        this.BuyerReference;

        /**
         * @var string Data do cadastro do comprador na plataforma da loja
         */
        this.CreateDateInMerchant;

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
         * @var string Identificação do comprador no Facebook
         */
        this.FacebookId;

        /**
         * @var string Sexo do comprador
         */
        this.Gender;

        /**
         * @var string Telefone residencial do comprador
         */
        this.HomePhone;

        /**
         * @var Data da última atualização do cadastro do comprador na plataforma da loja
         */
        this.LastBuyerUpdateInMerchant;

        /**
         * @var string Telefone celular do comprador
         */
        this.MobilePhone;

        /**
         * @var string Nome do comprador
         */
        this.Name;

        /**
         * @var string Tipo de pessoa
         */
        this.PersonType;

        /**
         * @var string Identificação do comprador no Twitter
         */
        this.TwitterId;

        /**
         * string Telefone de trabalho do comprador
         */
        this.WorkPhone;

        /**
         * @var Address[] Coleção de endereços do comprador.
         */
        this.AddressCollection;

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
    getIpAddress() {
        return this.IpAdress;
    }

    /**
     * @param string ipAddress
     * @return this
     */
    setIpAddress(ipAddress) {
        this.IpAdress = ipAddress;

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
    getBirthdate() {
        return Date('Y-m-d\TH:i:s', this.Birthdate);
    }

    /**
     * @param \DateTime birthDate
     * @return this
     */
    setBirthdate(birthdate) {
        this.Birthdate = birthdate.format('Y-m-d\TH:i:s');
        return this;
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
        return Date(this.CreateDateInMerchant, 'Y-m-d\TH:i:s');
    }

    /**
     * @param \DateTime createDateInMerchant
     * @return this
     */
    setCreateDateInMerchant(createDateInMerchant) {
        this.CreateDateInMerchant = dateformat(createDateInMerchant, 'Y-m-d\TH:i:s');

        return this;
    }

    /**
     * @return Data
     */
    getLastBuyerUpdateInMerchant() {
        return dateformat(this.LastBuyerUpdateInMerchant, 'Y-m-d\TH:i:s');
    }

    /**
     * @param \DateTime lastBuyerUpdateInMerchant
     * @return this
     */
    setLastBuyerUpdateInMerchant(lastBuyerUpdateInMerchant) {
        this.LastBuyerUpdateInMerchant = lastBuyerUpdateInMerchant.format('Y-m-d\TH:i:s');

        return this;
    }
};