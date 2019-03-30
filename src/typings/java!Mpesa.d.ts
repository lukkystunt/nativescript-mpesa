declare module com {
    export module androidstudy {
        export module daraja {
            export interface DarajaListener<AccessToken>{
                onResult(accessToken: AccessToken): void;
                onError(error: string): void;
            }
            export module model{
                export class LNMResult{
                    MerchantRequestID:string;
                    CheckoutRequestID: string;
                    ResponseCode: string;
                    ResponseDescription: string;
                    CustomerMessage: string;
                    LNMResult()
                }

                export class LNMEXpress{
                    BusinessShortCode:string;
                    PassKey:string;
                    Password?:string;
                    Timestamp?:string;
                    Type: com.androidstudy.daraja.util.TransactionType;
                    Amount:string;
                    TransactionType?:string;
                    PartyA:string;
                    PartyB:string;
                    PhoneNumber:string;
                    CallBackURL:string;
                    AccountReference:string;
                    TransactionDesc:string;
                    LNMExpress(businessShortCode:string,passKey:string,transactionType:com.androidstudy.daraja.util.TransactionType, amount:string,partyA:string,partyB:string,phoneNumber:string,callBackURL:string,accountReference:string,transactionDesc:string)
                }
            }

            export module util{
                export enum TransactionType {
                    CustomerPayBillOnline = "CustomerPayBillOnline",
                    CustomerBuyGoodsOnline = "CustomerBuyGoodsOnline"
                }
            }
            export class AccessToken{
                getAccess_token(): string;
            }
            export class Daraja{
                static with(consumerKey:string, consumerSecret:string, darajaListener: DarajaListener<AccessToken>): void;
                requestMPESAExpress(lnmExpress:com.androidstudy.daraja.model.LNMEXpress, listener:DarajaListener<com.androidstudy.daraja.model.LNMResult>): DarajaListener<com.androidstudy.daraja.model.LNMResult>;
            }
            
        }
        
    }
}  
