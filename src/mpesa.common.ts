import { Observable } from 'tns-core-modules/data/observable';
export interface AccessTokenParams {
    access_token: string;
    expires_in: string;
}
// export declare enum TransType {
//     CustomerPayBillOnline = "CustomerPayBillOnline",
//     CustomerBuyGoodsOnline = "CustomerBuyGoodsOnline"
// }
export declare enum Env {
    PRODUCTION = "PRODUCTION",
    SANDBOX = "SANDBOX"
}
export interface TransactionType {
    type: TransType;
}
export type TransType = "CustomerPayBillOnline" | "CustomerBuyGoodsOnline";

export interface LNMExpress {
    BusinessShortCode: string;
    PassKey: string;
    Password?: string;
    Timestamp?: string;
    Type: TransType;
    Amount: string;
    TransactionType?: string;
    PartyA: string;
    PartyB: string;
    PhoneNumber: string;
    CallBackURL: string;
    AccountReference: string;
    TransactionDesc: string;
}
export interface LNMResult {
    MerchantRequestID: string;
    CheckoutRequestID: string;
    ResponseCode: string;
    ResponseDescription: string;
    CustomerMessage: string;
}
export abstract class Common extends Observable {
  abstract initialize(customerKey: string, custoemrSecret: string, env: 'SANDBOX'|'PRODUCTION'): Promise<string>;
  abstract requestMPESAExpress(lnmExpress: LNMExpress): Promise<LNMResult>;
  constructor() {
      super();
  }
}
