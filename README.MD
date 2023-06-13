# qwd-api
A SOAP service implemented in Node.js that communicates with QuickBook's Web Connector.


## Description
This project provides a SOAP service implemented in Node.js that enables seamless communication with QuickBook's Web Connector. It allows for efficient integration with QuickBooks Desktop, facilitating the retrieval of data and streamlining processes.

*This sample is a Node.js web service application that communicates with
QuickBooks via QBWebConnector. The sample focuses primarily on demonstrating
how to setup all web service web methods to run against QBWebConnector.

 AND using this Node.js project  Able to fetching data from QBD `Datas like :(job->[JobTypeQueryRq],SalesOrder->[SalesOrderQueryRq],Invoice->[InvoiceQueryRq],Item ->[ItemQueryRq] ,PurchaseOrder->[PurchaseOrderQueryRq] ,Bill ->(BillQueryRq) Customer->(CustomerQueryRq )etc.. ) `
 
 change the code [ here](https://github.com/harshad4321/QBD-SOAP-service/blob/master/bin/qbXMLHandler/index.js).
 
 
 ### For Better understanding prefer this [Click here](https://developer.intuit.com/app/developer/qbdesktop/docs/api-reference/qbdesktop/customerquery) 
 
 
## Usage
To get started with the qwd-api, please follow these steps:

Prerequisites
Before using the qwd-api, ensure you have the following prerequisites:

- Access to the desktop running QuickBooks and hosting the Company File.
- The QuickBooks Company's administrator (user: ***) password.
- (Optional) A dedicated username and password for your web-service to interact   with the QuickBooks Web Connector (Note: It is not recommended to use the       admin username and password).
- (Optional) The port on which the service should be available (defaults to  8000).
### Set environment (env) variables for the following values (these are the defaults):
`QB_USERNAME=username
QB_PASSWORD=password
QB_COMPANY_FILE= `

### qbXML Handler
You must addtionally create your own `qbXMLHandler` that will send the SOAP Server a queue of requests to pass to QBWC. It will addtionally handle the qbXML responses and any errors that may be returned.

There is an [example class here](https://github.com/harshad4321/QBD-SOAP-service/blob/master/bin/qbXMLHandler/index.js).

### SOAP Server Setup
To start the service from the command line simply run:  
``` 
node bin/run
```
or 
install [nodemon](https://www.npmjs.com/package/nodemon)
``` 
npm start 
```
### QBWC Setup 
1. Login to your Quickbooks Company with your `admin` user.
2. In the Quickbooks Web Connector, select "Add an Application" and supply it with a `.qwc` file. There is an example [here](https://github.com/harshad4321/QBD-SOAP-service/blob/master/test/app.qwc)
  * `<OwnerID>` and `<FileID>`can be any random `guid`
3. Quickbooks will prompt you to authorize your new web service.
4. You may need to enter your password into QBWC once the app is added.



## Tests 
Unit tests are written in mocha.
```
npm test
```
