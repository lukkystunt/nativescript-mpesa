import { Common } from './mpesa.common';

declare const com: any;

export class Mpesa extends Common {
    private customerKey;
    private customerSecret;
    private daraja: com.androidstudy.daraja.Daraja;

    initialize(customerKey: string, customerSecret: string): Promise<string>  {
       this.customerKey = new java.lang.String(customerKey);
       this.customerSecret = new java.lang.String(customerSecret);
       return new Promise<string>((resolve, reject) => {
           com.androidstudy.daraja.Daraja.with(this.customerKey, this.customerSecret,
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

    makePayment() {

    }
}
