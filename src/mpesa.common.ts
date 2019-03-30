import { Observable } from 'tns-core-modules/data/observable';
export interface AccessTokenParams {
    access_token: string;
    expires_in: string;
}
export declare enum TransType {
    CustomerPayBillOnline = "CustomerPayBillOnline",
    CustomerBuyGoodsOnline = "CustomerBuyGoodsOnline"
}
export declare enum Env {
    PRODUCTION = "PRODUCTION",
    SANDBOX = "SANDBOX"
}
export interface TransactionType {
    type: TransType;
}
export interface LNMExpressParams {
    BusinessShortCode: string;
    PassKey: string;
    Password: string;
    Timestamp: string;
    Type: TransactionType;
    Amount: string;
    TransactionType: string;
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
  abstract initialize(customerKey: string, custoemrSecret: string): Promise<string>;
  constructor() {
      super();
  }
}
