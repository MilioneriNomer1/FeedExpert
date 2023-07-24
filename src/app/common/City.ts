import {County} from "./County";

export class City {
  public cityId: number = 0;
  public name: string = "";
  public code: string = "";
  public county: County = new County();
}
