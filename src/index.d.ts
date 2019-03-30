import { Common } from './mpesa.common';
export declare class Mpesa extends Common {
  private customerKey;
  private customerSecret;
  private daraja: com.androidstudy.daraja.Daraja;
  public initialize(customerKey:string, customerSecret:string): Promise<string>;
}

export * from "./mpesa.common";
