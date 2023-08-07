import { Product } from "./Product";

export class Batch {

  public productId: number = 0;
  public customerId: number = 0;
  public supervisitorId: number = 0;
  public techlabId: number = 0;
  public receivedDate: Date = new Date(Date.toLocaleString());
  public remarks: string = "";
  public internalNotes: string = "";
  public samples: [] = [];

}
