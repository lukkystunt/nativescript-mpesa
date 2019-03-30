import { Observable } from 'tns-core-modules/data/observable';
import { Mpesa } from 'nativescript-mpesa';

export class HelloWorldModel extends Observable {
  public message: string;
  private mpesa: Mpesa;

  constructor() {
    super();

    this.mpesa = new Mpesa();
    this.message = this.mpesa.message;
  }
}
