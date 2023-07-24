import { Product } from "./Product";

export class Batch{
  public scNumber: number = 0;
  public receivedDate: Date = new Date();
  public customerId: number = 0;
  public supervisitorId: number = 0;
  public techlabId: number = 0;
  public remarks: string = "";
  public internalNotes: string = "";
  public product: Product = new Product();
}
