import { Observable } from 'tns-core-modules/data/observable';
import { Mpesa, LNMExpress, TransactionType, TransType } from 'nativescript-mpesa';

export class HelloWorldModel extends Observable {
  public message: string;
  private mpesa: Mpesa;
  private lnmExpress: LNMExpress;

  constructor() {
    super();

    this.mpesa = new Mpesa();

    this.lnmExpress = {
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
    this.mpesa.initialize("dRSvS4nnTGU8vf1V8jUHfu9BW6AAxl83",  "WQFHurC4OsVBYJQt", "SANDBOX").
            then(res => {
              console.log("access token", res);
              this.mpesa.requestMPESAExpress(this.lnmExpress).then(
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
  }
}
