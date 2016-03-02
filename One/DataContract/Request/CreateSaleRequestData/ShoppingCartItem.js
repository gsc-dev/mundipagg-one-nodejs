'use strict';

/**
 * Class ShoppingCartItem
 * @package Gateway\One\DataContract\Request\CreateSaleRequestData
 */
module.exports = class ShoppingCartItem {
  constructor() {
    /**
     * @var string Descrição do produto
     */
    this.Description;

    /**
     * @var int Valor total do desconto em centavos
     */
    this.DiscountAmountInCents;

    /**
     * @var string Referência do produto no sistema da loja
     */
    this.ItemReference;

    /**
     * @var string Nome do produto
     */
    this.Name;

    /**
     * @var int Quantidade
     */
    this.Quantity;

    /**
     * @var int Valor unitário em centavos
     */
    this.UnitCostInCents;

    /**
     * @var int Valor total em centavos
     */
    this.TotalCostInCents;
  }

  /**
   * @param string Description
   * @return this
   */
  setDescription(Description) {
    this.Description = Description;

    return this;
  }

  /**
   * @return string
   */
  getDescription() {
    return this.Description;
  }

  /**
   * @param int discountAmountInCents
   * @return this
   */
  setDiscountAmountInCents(discountAmountInCents) {
    this.DiscountAmountInCents = discountAmountInCents;

    return this;
  }

  /**
   * @return int
   */
  getDiscountAmountInCents() {
    return this.DiscountAmountInCents;
  }

  /**
   * @param itemReference
   * @return this
   */
  setItemReference(itemReference) {
    this.ItemReference = itemReference;

    return this;
  }

  /**
   * @return string
   */
  getItemReference() {
    return this.ItemReference;
  }


  /**
   * @param name
   * @return this
   */
  setName(name) {
    this.Name = name;

    return this;
  }

  /**
   * @return string
   */
  getName() {
    return this.Name;
  }

  /**
   * @param quantity
   * @return this
   */
  setQuantity(quantity) {
    this.Quantity = quantity;

    return this;
  }

  /**
   * @return int
   */
  getQuantity() {
    return this.Quantity;
  }

  /**
   * @param totalCostInCents
   * @return this
   */
  setTotalCostInCents(totalCostInCents) {
    this.TotalCostInCents = totalCostInCents;

    return this;
  }

  /**
   * @return int
   */
  getTotalCostInCents() {
    return this.TotalCostInCents;
  }

  /**
   * @param unitCostInCents
   * @return this
   */
  setUnitCostInCents(unitCostInCents) {
    this.UnitCostInCents = unitCostInCents;

    return this;
  }

  /**
   * @return int
   */
  getUnitCostInCents() {
    return this.UnitCostInCents;
  }
};
