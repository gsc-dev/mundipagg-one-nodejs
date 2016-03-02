'use strict';
// namespace Gateway\One\DataContract\Request;

// use Gateway\One\DataContract\Common\BaseObject;

/**
 * Class CreateSaleRequest
 * @package Gateway\One\DataContract\Request
 */

const CreateSaleRequestData = require('./CreateSaleRequestData/CreditCardTransaction');
const BoletoTransaction = require('./CreateSaleRequestData/BoletoTransaction');
const Buyer = require('./CreateSaleRequestData/Buyer');
const Merchant = require('./CreateSaleRequestData/Merchant');
const SaleOptions = require('./CreateSaleRequestData/SaleOptions');
const Order = require('./CreateSaleRequestData/Order');
const RequestData = require('./CreateSaleRequestData/RequestData');
const ShoppingCart = require('./CreateSaleRequestData/ShoppingCart');

module.exports = class CreateSaleRequest {

  /**
   *
   */
  constructor() {

    /**
     * @var CreateSaleRequestData\CreditCardTransaction[] Coleção de transações de cartão de crédito
     */
    this.CreditCardTransactionCollection;

    /**
     * @var CreateSaleRequestData\BoletoTransaction[] Coleção de transações de boleto
     */
    this.BoletoTransactionCollection;

    /**
     * @var CreateSaleRequestData\Buyer Objeto com os dados do comprador
     */
    this.Buyer;

    /**
     * @var CreateSaleRequestData\Merchant Identificação da loja
     */
    this.Merchant;

    /**
     * @var CreateSaleRequestData\SaleOptions Configurações opcionais da transação
     */
    this.Options;

    /**
     * @var CreateSaleRequestData\Order Dados do pedido
     */
    this.Order;

    /**
     * @var CreateSaleRequestData\RequestData Dados adicionais da requisição
     */
    this.RequestData;

    /**
     * @var CreateSaleRequestData\ShoppingCart[] Coleção de carrinhos de compra
     */
    this.ShoppingCartCollection;

    this.CreditCardTransactionCollection = null;
    this.BoletoTransactionCollection = null;
    this.Buyer = null;
    this.Merchant = null;
    this.Options = null;
    this.Order = null;
    this.RequestData = null;
    this.ShoppingCartCollection = null;
  }

  /**
   * @return CreateSaleRequestData\CreditCardTransaction[]
   */
  getCreditCardTransactionCollection() {
    if (this.CreditCardTransactionCollection == null) {
      this.CreditCardTransactionCollection = [];
    }

    return this.CreditCardTransactionCollection;
  }

  /**
   * @param CreateSaleRequestData\CreditCardTransaction creditCardTransaction
   * @return CreateSaleRequestData\CreditCardTransaction
   */
  addCreditCardTransaction(creditCardTransaction) {
    if (creditCardTransaction == null) {
      creditCardTransaction = new CreateSaleRequestData();
    }

    this.CreditCardTransactionCollection = creditCardTransaction;

    return creditCardTransaction;
  }

  /**
   * @return CreateSaleRequestData\BoletoTransaction[]
   */
  getBoletoTransactionCollection() {
    if (empty(this.BoletoTransactionCollection)) {
      this.BoletoTransactionCollection = [];
    }

    return this.BoletoTransactionCollection;
  }

  /**
   * @param CreateSaleRequestData\BoletoTransaction boletoTransaction
   * @return CreateSaleRequestData\BoletoTransaction
   */
  addBoletoTransaction(boletoTransaction) {
    if (boletoTransaction == null) {
      boletoTransaction = new BoletoTransaction();
    }

    this.BoletoTransactionCollection = boletoTransaction;

    return boletoTransaction;
  }

  /**
   * @return CreateSaleRequestData\Buyer
   */
  getBuyer() {
    if (this.Buyer == null) {
      this.Buyer = new Buyer();
    }

    return this.Buyer;
  }

  /**
   * @return CreateSaleRequestData\Merchant
   */
  getMerchant() {
    if (this.Merchant == null) {
      this.Merchant = new Merchant();
    }

    return this.Merchant;
  }

  /**
   * @return CreateSaleRequestData\SaleOptions
   */
  getOptions() {
    if (this.Options == null) {
      this.Options = new SaleOptions();
    }

    return this.Options;
  }

  /**
   * @return CreateSaleRequestData\Order
   */
  getOrder() {
    if (this.Order ==null) {
      this.Order = new Order();
    }

    return this.Order;
  }

  /**
   * @return CreateSaleRequestData\Order
   */
  setOrder(order) {
    this.Order = order;
    return this.Order;
  }

  /**
   * @return CreateSaleRequestData\RequestData
   */
  getRequestData() {
    if (this.RequestData == null) {
      this.RequestData = new RequestData();
    }

    return this.RequestData;
  }

  /**
   * @return CreateSaleRequestData\ShoppingCart[]
   */
  getShoppingCartCollection() {
    if (this.ShoppingCartCollection ==null) {
      this.ShoppingCartCollection = [];
    }

    return this.ShoppingCartCollection;
  }

  /**
   * @param CreateSaleRequestData\ShoppingCart shoppingCart
   * @return CreateSaleRequestData\ShoppingCart
   */
  addShoppingCart(shoppingCart) {
    if (shoppingCart == null) {
      shoppingCart = new ShoppingCart();
    }

    this.ShoppingCartCollection = shoppingCart;

    return shoppingCart;
  }
};
