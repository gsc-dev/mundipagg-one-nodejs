'use strict';

const CreditCardBrandEnum = require('../../One/DataContract/Enum/CreditCardBrandEnum');
const CreditCard = require('../../One/DataContract/Request/CreateSaleRequestData/CreditCard');
const CreditCardHelper = require('../../One/Helper/CreditCardHelper');

module.exports = class CreditCardHelperTest {
  testCreateCreditCard_Failure() {
    let creditCard = CreditCardHelper.createCreditCard('', '', '', '');
    this.assertFalse(creditCard);
  }

  testCreateCreditCard_Success() {
    let expected = new CreditCard();
    expected.setCreditCardBrand(CreditCardBrandEnum['MASTERCARD']);
    expected.setCreditCardNumber('5555444433332222');
    expected.setExpMonth(12);
    expected.setExpYear(30);
    expected.setHolderName('gateway');
    expected.setSecurityCode('999');
    let creditCard = CreditCardHelper.createCreditCard(' 5555 4444 3333 2222 ', ' gateway ', ' 12/30 ', ' 999 ');
    this.assertEquals(expected, creditCard);

    expected.setExpYear(2030);
    creditCard = CreditCardHelper::createCreditCard(' 5555 4444 3333 2222 ', ' gateway ', ' 12/2030 ', ' 999 ');
    this.assertEquals(expected, creditCard);
  }
}
