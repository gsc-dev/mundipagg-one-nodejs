'use strict';
// namespace Gateway\One\DataContract\Request\CreateSaleRequestData;

// use Gateway\One\DataContract\Common\BaseObject;

/**
 * Class CreditCardTransactionOptions
 * @package Gateway\One\DataContract\Request\CreateSaleRequestData
 */
module.exports = class CreditCardTransactionOptions {
  constructor() {
    /**
     * @var string Código ISO da moeda
     */
    this.CurrencyIso;

    /**
     * @var int Tempo em minutos para que a transação seja capturada
     */
    this.CaptureDelayInMinutes;

    /**
     * @var int Valor total em centavos, para uma transação Iata, utilizada em companhias aéreas.
     */
    this.IataAmountInCents;

    /**
     * @var int Código do meio de pagamento específico onde a transação será processada,
     * Ex: Stone, Cielo, etc. A plataforma One seleciona automaticamente o meio de pagamento de acordo com a ordem de prioridade definida no setup da loja.
     * Sendo assim, este campo deve ser informado apenas caso uma transação deva ser processada em um meio de pagamento específico.
     * Observação, nos casos onde a loja informa o meio de pagamento a retentativa multi-acquirer não é realizada
     */
    this.PaymentMethodCode;

    /**
     * @var string Nome que será exibido na fatura do cartão
     */
    this.SoftDescriptorText;

    /**
     * @var float Taxa de juros
     */
    this.InterestRate;
  }

  /**
   * @return string
   */
  getCurrencyIso() {
    return this.CurrencyIso;
  }

  /**
   * @param string currencyIso
   * @return this
   */
  setCurrencyIso(currencyIso) {
    this.CurrencyIso = currencyIso;

    return this;
  }

  /**
   * @return int
   */
  getCaptureDelayInMinutes() {
    return this.CaptureDelayInMinutes;
  }

  /**
   * @param int captureDelayInMinutes
   * @return this
   */
  setCaptureDelayInMinutes(captureDelayInMinutes) {
    this.CaptureDelayInMinutes = captureDelayInMinutes;

    return this;
  }

  /**
   * @return int
   */
  getIataAmountInCents() {
    return this.IataAmountInCents;
  }

  /**
   * @param int iataAmountInCents
   * @return this
   */
  setIataAmountInCents(iataAmountInCents) {
    this.IataAmountInCents = iataAmountInCents;

    return this;
  }

  /**
   * @return int
   */
  getPaymentMethodCode() {
    return this.PaymentMethodCode;
  }

  /**
   * @param int paymentMethodCode
   * @return this
   */
  setPaymentMethodCode(paymentMethodCode) {
    this.PaymentMethodCode = paymentMethodCode;

    return this;
  }

  /**
   * @return string
   */
  getSoftDescriptorText() {
    return this.SoftDescriptorText;
  }

  /**
   * @param string softDescriptorText
   * @return this
   */
  setSoftDescriptorText(softDescriptorText) {
    this.SoftDescriptorText = softDescriptorText;

    return this;
  }

  /**
   * @return float
   */
  getInterestRate() {
    return this.InterestRate;
  }

  /**
   * @param float interestRate
   * @return this
   */
  setInterestRate(interestRate) {
    this.InterestRate = interestRate;

    return this;
  }
}
