import { Common, LNMResult, LNMExpress, TransactionType, TransType } from './mpesa.common';

declare const com: any;

export class Mpesa extends Common {
    private customerKey;
    private customerSecret;
    private daraja: com.androidstudy.daraja.Daraja;

    initialize(customerKey: string, customerSecret: string, env: 'SANDBOX'|'PRODUCTION' ): Promise<string>  {
       this.customerKey = new java.lang.String(customerKey);
       this.customerSecret = new java.lang.String(customerSecret);
       return new Promise<string>((resolve, reject) => {
           this.daraja = com.androidstudy.daraja.Daraja.with(this.customerKey, this.customerSecret, this.getENV(env),
                            new com.androidstudy.daraja.DarajaListener({
                                onResult: (accessToken: com.androidstudy.daraja.AccessToken) => {
                                    resolve(accessToken.getAccess_token());
                                },
                                onError: (error: string) => {
                                    reject(error);
                                }
                        }));
       });
    }

    requestMPESAExpress(lnmExpress: LNMExpress): Promise<LNMResult> {
        return new Promise<LNMResult>((resolve, reject) => {
            const lnm = new com.androidstudy.daraja.model.LNMExpress(
                new java.lang.String(lnmExpress.BusinessShortCode),
                new java.lang.String(lnmExpress.PassKey),
                this.getTransactionType(lnmExpress.Type),
                new java.lang.String(lnmExpress.Amount),
                new java.lang.String(lnmExpress.PartyA),
                new java.lang.String(lnmExpress.PartyB),
                new java.lang.String(lnmExpress.PhoneNumber),
                new java.lang.String(lnmExpress.CallBackURL),
                new java.lang.String(lnmExpress.AccountReference),
                new java.lang.String(lnmExpress.TransactionDesc)

            );
            this.daraja.requestMPESAExpress(lnm,  new com.androidstudy.daraja.DarajaListener({
                onResult: (lnmResult: LNMResult) => {
                    let response = {
                                        MerchantRequestID: lnmResult.MerchantRequestID,
                                        CheckoutRequestID: lnmResult.CheckoutRequestID,
                                        ResponseCode: lnmResult.ResponseCode,
                                        ResponseDescription: lnmResult.ResponseDescription,
                                        CustomerMessage: lnmResult.CustomerMessage
                                   };
                    resolve(response);
                },
                onError: (error: string) => {
                    reject(error);
                }
            }));
        });
    }

    private getTransactionType(type: string) {
        if (type === 'CustomerPayBillOnline') {
            return com.androidstudy.daraja.constants.Transtype.CustomerPayBillOnline;
        }
        return com.androidstudy.daraja.constants.Transtype.CustomerBuyGoodsOnline;
    }

    private getENV(env: string) {
        if (env === 'PRODUCTION') {
            return com.androidstudy.daraja.util.Env.PRODUCTION;
        }
        return com.androidstudy.daraja.util.Env.SANDBOX;
    }
}
