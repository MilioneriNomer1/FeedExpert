import {State} from "./State";

export class County{
  public countyId: number = 0;
  public name: string = "";
  public code: string = "";
  public state: State = new State();
}
