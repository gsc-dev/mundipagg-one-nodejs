'use strict';
/**
 * Class Address
 * @package Gateway\One\DataContract\Common
 */
module.exports = class Address {
  constructor() {
    /**
     * @var string Tipo do endereço
     */
    this.AddressType;

    /**
     * @var string Logradouro
     */
    this.Street;

    /**
     * @var string Número
     */
    this.Number;

    /**
     * @var string Complemento do endereço
     */
    this.Complement;

    /**
     * @var string Bairro
     */
    this.District;

    /**
     * @var string Cidade
     */
    this.City;

    /**
     * @var string Estado
     */
    this.State;

    /**
     * @var string País
     */
    this.Country;

    /**
     * @var string CEP
     */
    this.ZipCode;
  }

  /**
   * @param addressType
   * @return this
   */
  setAddressType(addressType) {
    this.AddressType = addressType;

    return this;
  }

  /**
   * @return string
   */
  getAddressType() {
    return this.AddressType;
  }


  /**
   * @param city
   * @return this
   */
  setCity(city) {
    this.City = city;

    return this;
  }

  /**
   * @return string
   */
  getCity() {
    return this.City;
  }


  /**
   * @param complement
   * @return this
   */
  setComplement(complement) {
    this.Complement = complement;

    return this;
  }

  /**
   * @return string
   */
  getComplement() {
    return this.Complement;
  }

  /**
   * @param country
   * @return this
   */
  setCountry(country) {
    this.Country = country;

    return this;
  }

  /**
   * @return string
   */
  getCountry() {
    return this.Country;
  }


  /**
   * @param district
   * @return this
   */
  setDistrict(district) {
    this.District = district;

    return this;
  }

  /**
   * @return string
   */
  getDistrict() {
    return this.District;
  }


  /**
   * @param number
   * @return this
   */
  setNumber(number) {
    this.Number = number;

    return this;
  }

  /**
   * @return string
   */
  getNumber() {
    return this.Number;
  }

  /**
   * @param state
   * @return this
   */
  setState(state) {
    this.State = state;

    return this;
  }

  /**
   * @return string
   */
  getState() {
    return this.State;
  }


  /**
   * @param street
   * @return this
   */
  setStreet(street) {
    this.Street = street;

    return this;
  }

  /**
   * @return string
   */
  getStreet() {
    return this.Street;
  }


  /**
   * @param zipCode
   * @return this
   */
  setZipCode(zipCode) {
    this.ZipCode = zipCode;

    return this;
  }

  /**
   * @return string
   */
  getZipCode() {
    return this.ZipCode;
  }
}
