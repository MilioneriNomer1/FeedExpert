// import {City} from "./City";
//
// export class Customer{
//   public customerId: number = 0;
//   public company: string = "";
//   public address: string = "";
//   public address1: string = "";
//   public zip: string = "";
//   public phone: string = "";
//   public fax: string = "";
//   public city: City = new City();
// }

export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  id?: number;
  name?: number;
  country?: Country;
  company?: string;
  date?: string;
  status?: string;
  representative?: Representative;
}
