import {City} from "./City";

export class Customer{
  public customerId: number = 0;
  public company: string = "";
  public address: string = "";
  public address1: string = "";
  public zip: string = "";
  public phone: string = "";
  public fax: string = "";
  public city: City = new City;
}
