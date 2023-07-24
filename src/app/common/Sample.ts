import {Batch} from "./Batch";
import {Substance} from "./Substance";

export class Sample{
  public sampleId: number = 0;
  public scNumber: number = 0;
  public resultdate: Date = new Date();
  public expectedValue: string = "";
  public meetSpecs: boolean = false;
  public printed: boolean = false;
  public book: string = "";
  public page: string = "";
  public batch: Batch = new Batch();
  public substance: Substance = new Substance();
}
