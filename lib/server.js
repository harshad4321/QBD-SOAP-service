
//  * Server.js
//     *
//  * This class will star the SOAP service
//     * and start listening for requests from
//         * a Quickbooks Web Connector
//             * /

//////////////////
//
// Private
//
//////////////////

/**
 * Node.js' HTTP Library
 *
 * https://nodejs.org/dist/latest-v6.x/docs/api/http.html
 */
var http = require('http');
const express = require('express');
const app = express();
var colors = require('colors');
/**
 * Node.js' File System API
 *
 * https://nodejs.org/dist/latest-v6.x/docs/api/fs.html
 */
var fs = require('fs');

/**
 * A SOAP client and server
 * for Node.js
 *
 * https://github.com/vpulim/node-soap
 */
var soap = require('soap');

/**
 * An HTTP server that will be used
 * to listen for SOAP requests.
 */
var server = http.createServer(function (req, res) {
    res.end('404: Not Found: ' + req.url);
});

var port = process.env.QB_SOAP_PORT || 8000;

/**
 * A constant for the WSDL filename.
 * @type {string}
 */
var WSDL_FILENAME = '/qbws.wsdl';

/**
 * Fetches the WSDL file for the
 * SOAP service.
 *
 * @returns {string} contents of WSDL file
 */
function buildWsdl() {
    var wsdl = fs.readFileSync(__dirname + WSDL_FILENAME, 'utf8');

    return wsdl;
}

//////////////////
//
// Public
//
//////////////////

module.exports = Server;

function Server() {
    this.wsdl = buildWsdl();
    this.webService = require('./web-service');
}

Server.prototype.run = function () {
    var soapServer;
    server.listen(port);
    soapServer = soap.listen(server, '/wsdl', this.webService.service, this.wsdl);
    console.log('Quickbooks SOAP Server listening on port '.red + port);
};


Server.prototype.setQBXMLHandler = function (qbXMLHandler) {
    this.webService.setQBXMLHandler(qbXMLHandler);
};