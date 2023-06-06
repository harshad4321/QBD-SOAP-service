======
A SOAP service implemented in Node.js that communicates with [QuickBook's Web Connector](https://developer.intuit.com/docs/0200_quickbooks_desktop/0400_tools/web_connector).

## Usage 
The following steps _should_ get you up and running. 

### Prerequisites
There are a few prerequisites you should have on hand:  
*  Access to the desktop running Quickbooks and hosting the Company File.  
*  The Quickbooks Company's administrator (user: `admin`) password   
*  _Optional:_ A dedicated username and password for your web-service to interact with the Quickbooks Web Connector (**it is not recommended to use the admin username and password!**).  
*  _Optional:_ The port on which the service should be available. Defaults to `8080`.

Set environment (`env`) variables for the following values (these are the defaults):  
```
QB_USERNAME=username
QB_PASSWORD=password  
QB_COMPANY_FILE=C:\Users\Public\Documents\Intuit\QuickBooks\Sample Company Files\QuickBooks 2014\sample_wholesale-distribution business.qbw  
QB_SOAP_PORT=8000  
```  
