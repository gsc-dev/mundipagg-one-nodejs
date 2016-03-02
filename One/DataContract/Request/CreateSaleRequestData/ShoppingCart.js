'use strict';

const Address          = require('./../../Common/Address');
const ShoppingCartItem = require('./ShoppingCartItem');
const dateFormat       = require('dateformat');
/**
 * Class ShoppingCart
 * @package Gateway\One\DataContract\Request\CreateSaleRequestData
 */
module.exports = class ShoppingCart {
    constructor() {
        /**
         * @var string Data limite para entrega
         */
        this.DeliveryDeadline;

        /**
         * @var string Data estimada para entrega
         */
        this.EstimatedDeliveryDate;

        /**
         * @var int Custo total do frete
         */
        this.FreightCostInCents;

        /**
         * @var string Transportadora responsável pela entrega
         */
        this.ShippingCompany;

        /**
         * @var ShoppingCartItem[] Lista de itens do carrinho de compra
         */
        this.ShoppingCartItemCollection;

        /**
         * @var Address Endereço de entrega do cliente
         */
        this.DeliveryAddress;

        this.ShoppingCartItemCollection = [];
    }


    /**
     * @param \Datetime deliveryDeadline
     * @return this
     */
    setDeliveryDeadline(deliveryDeadline) {
        this.DeliveryDeadline = dateFormat(deliveryDeadline, 'Y-m-d H:i:s');

        return this;
    }

    /**
     * @return string
     */
    getDeliveryDeadline() {
        return dateFormat(this.DeliveryDeadline, 'Y-m-d H:i:s');
    }

    /**
     * @param \DateTime estimatedDeliveryDate
     * @return this
     */
    setEstimatedDeliveryDate(estimatedDeliveryDate) {
        this.EstimatedDeliveryDate = dateFormat(estimatedDeliveryDate, 'Y-m-d H:i:s');

        return this;
    }

    /**
     * @return \DateTime
     */
    getEstimatedDeliveryDate() {
        return dateFormat(this.EstimatedDeliveryDate, 'Y-m-d H:i:s');
    }


    /**
     * @param int freightCostInCents
     * @return this
     */
    setFreightCostInCents(freightCostInCents) {
        this.FreightCostInCents = freightCostInCents;

        return this;
    }


    /**
     * @return int
     */
    getFreightCostInCents() {
        return this.FreightCostInCents;
    }


    /**
     * @param shippingCompany
     * @return this
     */
    setShippingCompany(shippingCompany) {
        this.ShippingCompany = shippingCompany;

        return this;
    }

    /**
     * @return string
     */
    getShippingCompany() {
        return this.ShippingCompany;
    }

    /**
     * @return \Gateway\One\ShoppingCartItem[]
     */
    getShoppingCartItemCollection() {
        return this.ShoppingCartItemCollection;
    }

    /**
     * @param ShoppingCartItem shoppingCartItem
     * @return ShoppingCartItem
     */
    addShoppingCartItem(shoppingCartItem) {
        if (shoppingCartItem == null) {
            shoppingCartItem = new ShoppingCartItem();
        }

        this.ShoppingCartItemCollection = shoppingCartItem;

        return shoppingCartItem;
    }

    /**
     * @return Address
     */
    getDeliveryAddress() {
        if (!this.DeliveryAddress) {
            this.DeliveryAddress = new Address();
        }

        return this.DeliveryAddress;
    }
};
