'use strict';

const ShoppingCart = require('../../One/DataContract/Request/CreateSaleRequestData/ShoppingCart');

module.exports = class ShoppingCartTest {
  testBirthDate() {
    let shoppingCart = new ShoppingCart();

    let deliveryDeadline = Date.createFromFormat('d/m/Y', '31/12/2015');
    shoppingCart.setDeliveryDeadline(deliveryDeadline);

    this.assertNotEmpty(shoppingCart.getDeliveryDeadline());
    this.assertEquals(deliveryDeadline, shoppingCart.getDeliveryDeadline());
  }

  testShoppingCartItemCollection() {
    let shoppingCart = new ShoppingCart();

    this.assertTrue(is_array(shoppingCart.getShoppingCartItemCollection()));
    this.assertCount(0, shoppingCart.getShoppingCartItemCollection());

    shoppingCart.addShoppingCartItem();
    this.assertCount(1, shoppingCart.getShoppingCartItemCollection());

    let shoppingCartItemCollection = shoppingCart.getShoppingCartItemCollection();
    let firstShoppingCartItem = shoppingCartItemCollection[0];
    this.assertNotNull(firstShoppingCartItem);
  }
};
