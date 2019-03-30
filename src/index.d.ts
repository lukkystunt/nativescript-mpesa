import { Common, LNMExpress, LNMResult } from './mpesa.common';
export declare class Mpesa extends Common {
  private customerKey;
  private customerSecret;
  private daraja: com.androidstudy.daraja.Daraja;
  public initialize(customerKey:string, customerSecret:string, env: 'SANDBOX'|'PRODUCTION'): Promise<string>;
  public requestMPESAExpress(lnmExpress:LNMExpress): Promise<LNMResult>;
}

export * from "./mpesa.common";
