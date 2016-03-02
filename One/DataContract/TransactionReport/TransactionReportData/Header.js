// namespace Gateway\One\DataContract\TransactionReport\TransactionReportData;

/**
 * Class Header
 * @package Gateway\One\DataContract\TransactionReport\TransactionReportData
 */
module.exports = class Header {
    constructor() {
        this.TransactionProcessedDate;

        this.ReportFileCreateDate;

        this.Version;
    }

    /**
     * @return string
     */
    getTransactionProcessedDate() {
        return this.TransactionProcessedDate;
    }

    /**
     * @param string TransactionProcessedDate
     * @return this
     */
    setTransactionProcessedDate(TransactionProcessedDate) {
        this.TransactionProcessedDate = TransactionProcessedDate;

        return this;
    }

    /**
     * @return string
     */
    getReportFileCreateDate() {
        return this.ReportFileCreateDate;
    }

    /**
     * @param string ReportFileCreateDate
     * @return this
     */
    setReportFileCreateDate(reportFileCreateDate) {
        this.ReportFileCreateDate = reportFileCreateDate;

        return this;
    }

    /**
     * @return string
     */
    getVersion() {
        return this.Version;
    }

    /**
     * @param string Version
     * @return this
     */
    setVersion(version) {
        this.Version = version;

        return this;
    }
}