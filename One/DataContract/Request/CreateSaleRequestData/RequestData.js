'use strict';

/**
 * Class RequestData
 * @package Gateway\One\DataContract\Request\CreateSaleRequestData
 */
module.exports = class RequestData {
  constructor() {
    /**
     * @var string Categoria do ecommerce
     */
    this.EcommerceCategory;

    /**
     * @var string Endereço IP do cliente
     */
    this.IpAddress;

    /**
     * @var string Origem da requisição
     */
    this.Origin;

    /**
     * @var string Identificador da sessão
     */
    this.SessionId;
  }

  /**
   * @return string
   */
  getEcommerceCategory() {
    return this.EcommerceCategory;
  }

  /**
   * @param string ecommerceCategory
   * @return this
   */
  setEcommerceCategory(ecommerceCategory) {
    this.EcommerceCategory = ecommerceCategory;
    return this;
  }

  /**
   * @return string
   */
  getIpAddress() {
    return this.IpAddress;
  }

  /**
   * @param string ipAddress
   * @return this
   */
  setIpAddress(ipAddress) {
    this.IpAddress = ipAddress;

    return this;
  }

  /**
   * @return string
   */
  getOrigin() {
    return this.Origin;
  }

  /**
   * @param string origin
   * @return this
   */
  setOrigin(origin) {
    this.Origin = origin;

    return this;
  }

  /**
   * @return string
   */
  getSessionId() {
    return this.SessionId;
  }

  /**
   * @param string sessionId
   * @return this
   */
  setSessionId(sessionId) {
    this.SessionId = sessionId;

    return this;
  }
}
