import { Observable } from 'tns-core-modules/data/observable';
import { Mpesa } from 'nativescript-mpesa';

export class HelloWorldModel extends Observable {
  public message: string;
  private mpesa: Mpesa;

  constructor() {
    super();

    this.mpesa = new Mpesa();
    this.mpesa.initialize("Uku3wUhDw9z0Otdk2hUAbGZck8ZGILyh",  "JDjpQBm5HpYwk38b").
            then(res => {
              console.log("result", res);
            }, err => {
              console.log("error", err);
            });
  }
}
