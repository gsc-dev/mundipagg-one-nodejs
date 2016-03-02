'use strict';
/**
 * Class CreditCardError
 */
module.exports = class CreditCardError {

  /**
   * @param string message
   * @param string field
   */
  constructor(message, field) {
    this.message = message;
    this.field = field;
  }
};
