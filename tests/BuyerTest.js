'use strict';
const Buyer  = require('../../One/DataContract/Request/CreateSaleRequestData/Buyer');
const should = require('chai').should();

describe('buyer', function () {
    var buyer = new Buyer();

    var birthDate = Date('d/m/Y', '11/05/1990');
    buyer.setBirthDate(birthDate);

    this.assertNotEmpty(buyer.getBirthDate());
    this.assertEquals(birthDate, buyer.getBirthDate());
});