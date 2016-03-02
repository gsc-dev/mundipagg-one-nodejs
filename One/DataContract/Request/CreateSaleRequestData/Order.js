'use strict';
// namespace Gateway\One\DataContract\Request\CreateSaleRequestData;

// use Gateway\One\DataContract\Common\BaseObject;

/**
 * Class Order
 * @package Gateway\One\DataContract\Request\CreateSaleRequestData
 */
module.exports = class Order {
    constructor() {
        /**
         * @var string Número do pedido no sistema do e-commerce
         */
        this.OrderReference;
    }

    /**
     * @return string
     */
    getOrderReference() {
        return this.OrderReference;
    }

    /**
     * @param string OrderReference
     * @return this
     */
    setOrderReference(OrderReference) {
        this.OrderReference = OrderReference;

        return this;
    }
};
