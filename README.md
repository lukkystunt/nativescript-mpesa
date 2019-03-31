# NativeScript Mpesa

Nativescript-Mpesa provides a wrapper that incorporate payments using Mpesa from within your {N} applications. The integration is achieved using the [Android M-Pesa Daraja SDK](https://github.com/jumaallan/AndroidMPesaAPI) libraries. Hence, has full support for Android.
## Installation

`tns plugin add nativescript-mpesa`
# Usage
### Setup
First import package into the main-page's model or app.component as the case may be for either {N} Core or {N} w/ Angular

```typescript
    import { Mpesa } from "nativescript-mpesa";
```
Then create an instance of Mpesa.

```javascript
     const mpesa = new Mpesa();
```

Initialize the instance with the CustomerKey,CustomerSecret gotten from [Safaricom](https://developer.safaricom.co.ke/test_credentials) and Env

Note Env could be `SANDBOX` or `PRODUCTION`

```javascript
    mpesa.initialize(CONSUMER_KEY, CONSUMER_SECRET, Env)
```
### Making Payment
```javascript
    const mpesa = new Mpesa();

    const lnmExpress = {
                        BusinessShortCode: "174379",
                        PassKey: "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919",
                        Type: "CustomerPayBillOnline",
                        Amount: "100",
                        PartyA: "254708374149",
                        PartyB: "174379",
                        PhoneNumber: "254708374149",
                        CallBackURL: "http://mycallbackurl.com/checkout.php",
                        AccountReference: "001ABC",
                        TransactionDesc: "Goods Payment"
                      };
    mpesa.initialize("dRSvS4nnTGU8vf1V8jUHfu9BW6AAxl83","WQFHurC4OsVBYJQt","SANDBOX").
            then(res => {
              console.log("access token", res);
              this.mpesa.requestMPESAExpress(lnmExpress).then(
                res => {
                  console.log("lnmResult", res);
                },
                err => {
                  console.log(err);
                }
              );
            }, err => {
              console.log("error", err);
            });
```
## Lipa na M-Pesa Online Payment API

The following table highlights the requirements needed by Daraja, as described in the [Safaricom Developer API Page](https://developer.safaricom.co.ke/lipa-na-m-pesa-online/apis/post/stkpush/v1/processrequest)

| Name                  | Description           | Parameter Type    | Possible Values |
| -------------         |:--------------------: | ----------------: | ---------------:|
| BusinessShortCode     | The organization shortcode used to receive the transaction        | Numeric             | Shortcode (6 digits)           |
| Passkey     | Lipa Na Mpesa Online PassKey       | Alpha-Numeric              |           | 
| Amount     | The amount to be transacted      | Numeric             | 100           |
| PartyA     | The entity sending the funds        | Numeric             | MSISDN (12 digits)          |
| PartyB     | The organization receiving the funds        | Numeric             | Shortcode (6 digits)           |
| PhoneNumber     | The MSISDN sending the funds        | Numeric             | MSISDN (12 digits)          |
| CallBackURL     | Call Back URL        | URL             | https://ip or domain:port/path           |
| AccountReference     | Account Reference        | Alpha-Numeric	             | Any combinations of letters and numbers |
| TransactionDesc     | Description of the transaction        | String             | any string of less then 20 characters          |

> Get the Pass Key Here : https://developer.safaricom.co.ke/test_credentials
# Response Signature
### Success Response
```javascript
   export interface LNMResult {
    MerchantRequestID: string;
    CheckoutRequestID: string;
    ResponseCode: string;
    ResponseDescription: string;
    CustomerMessage: string;
}
```
# Konwn Error

If you come accross this error message `error TypeError: Cannot read property 'with' of undefined`. Delete the platform folder after adding the plugin.
## License

Apache License Version 2.0, January 2004
