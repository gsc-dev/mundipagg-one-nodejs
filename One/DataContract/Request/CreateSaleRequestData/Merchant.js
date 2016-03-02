'use strict';
// namespace Gateway\One\DataContract\Request\CreateSaleRequestData;

// use Gateway\One\DataContract\Common\BaseObject;

/**
 * Class Merchant
 * @package Gateway\One\DataContract\Request\CreateSaleRequestData
 */
module.exports = class Merchant {
    constructor() {
        /**
         * @var string Identificação da loja.
         * Este campo deve ser utilizado por plataformas de e-commerce que desejam enviar o identificar da loja que esta realizando a transação
         */
        this.MerchantReference;
    }

    /**
     * @return string
     */
    getMerchantReference() {
        return this.MerchantReference;
    }

    /**
     * @param string merchantReference
     * @return this
     */
    setMerchantReference(merchantReference) {
        this.MerchantReference = merchantReference;
        return this;
    }
};
