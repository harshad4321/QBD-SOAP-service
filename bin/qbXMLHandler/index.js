var data2xml = require('data2xml');
var convert = data2xml({
    xmlHeader: '<?xml version="1.0" encoding="utf-8"?>\n<?qbxml version="13.0"?>\n'
});

// Public
module.exports = {

    /**
     * Builds an array of qbXML commands
     * to be run by QBWC.
     *
     * @param callback(err, requestArray)
     */
    fetchRequests: function (callback) {
        buildRequests(callback);
    },

    /**
     * Called when a qbXML response
     * is returned from QBWC.
     *
     * @param response - qbXML response
     */
    handleResponse: function (response) {
        console.log(response);
    },

    /**
     * Called when there is an error
     * returned processing qbXML from QBWC.
     *
     * @param error - qbXML error response
     */
    didReceiveError: function (error) {
        console.log(error);
    }
};

function buildRequests(callback) {
    var requests = [];
    // var requests = [];

    // var today = new Date();
    // var fiveDaysAgo = new Date();
    // fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

    // var fromDate = formatDate(fiveDaysAgo);
    // var toDate = formatDate(today);
    //job->[JobTypeQueryRq],SalesOrder->[SalesOrderQueryRq],Invoice-> [InvoiceQueryRq],Item ->[ItemQueryRq] ,PurchaseOrder[PurchaseOrderQueryRq]
    var xml = convert('QBXML', {
        QBXMLMsgsRq: {
            _attr: { onError: 'stopOnError' },
            CustomerQueryRq: {
                MaxReturned: 1000,
                // ModifiedDateRangeFilter: {
                FromModifiedDate: "2023-01-15T09:15:12", // fromDate
                ToModifiedDate: "2023-08-15T12:15:12"    //toDate
                // }
            },
        },
    });
    requests.push(xml);

    return callback(null, requests);
}
