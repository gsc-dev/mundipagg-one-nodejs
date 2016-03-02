'use strict';
// namespace Gateway\One\DataContract\Request\CreateSaleRequestData;

// use Gateway\One\DataContract\Common\BaseObject;

/**
 * Class Recurrency
 * @package Gateway\One\DataContract\Request\CreateSaleRequestData
 */
const dateFormat               = require('dateformat');

module.exports = class Recurrency {
  constructor() {
    /**
     * @var string Data para o início da cobrança recorrente
     */
    this.DateToStartBilling;

    /**
     * @var string Tipo do ciclo da recorrência
     */
    this.Frequency;

    /**
     * @var int Intervalo de cada ciclo de recorrência
     */
    this.Interval;

    /**
     * @var int Número de ciclos que serão cobrados
     */
    this.Recurrences;
  }

  /**
   * @return string
   */
  getDateToStartBilling() {
    return dateFormat(this.DateToStartBilling, 'Y-m-d H:i:s');
  }

  /**
   * @param \DateTime dateToStartBilling
   * @return this
   */
  setDateToStartBilling(dateToStartBilling) {
    this.DateToStartBilling = dateFormat(dateToStartBilling, 'Y-m-d H:i:s');

    return this;
  }

  /**
   * @return string
   */
  getFrequency() {
    return this.Frequency;
  }

  /**
   * @param string Frequency
   * @return this
   */
  setFrequency(Frequency) {
    this.Frequency = Frequency;

    return this;
  }

  /**
   * @return int
   */
  getInterval() {
    return this.Interval;
  }

  /**
   * @param int Interval
   * @return this
   */
  setInterval(Interval) {
    this.Interval = Interval;

    return this;
  }

  /**
   * @return int
   */
  getRecurrences() {
    return this.Recurrences;
  }

  /**
   * @param int Recurrences
   * @return this
   */
  setRecurrences(Recurrences) {
    this.Recurrences = Recurrences;

    return this;
  }
};
