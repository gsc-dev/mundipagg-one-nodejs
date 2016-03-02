// namespace Gateway\One\DataContract\Request;

// use Gateway\One\DataContract\Common\BaseObject;


module.exports = class UpdateInstantBuyDataRequest extends BaseObject {
    constructor () {
    	this.BuyerKey;
    }
    
    getBuyerKey(){
        return this.BuyerKey;
    }
    
    setBuyerKey($buyerKey){
        this.BuyerKey = $buyerKey;
        return $this;
    }
}
