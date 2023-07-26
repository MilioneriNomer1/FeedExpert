// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-customer',
//   templateUrl: './customer.component.html',
//   styleUrls: ['./customer.component.scss']
// })
// export class CustomerComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
// }

// import {Component, OnInit} from '@angular/core';
// import { LazyLoadEvent } from 'primeng/api';
// import { PrimeNGConfig } from 'primeng/api';
// import {Customer} from "../../common/Customer";
// import {CustomerService} from "../../services/customerservice";
//
// @Component({
//   selector: 'app-customer',
//   templateUrl: './customer.component.html'
// })
// export class CustomerComponent implements OnInit {
//   datasource: Customer[] = [];
//
//   customers: Customer[] = [];
//
//   totalRecords: number = 0;
//
//   cols: any[] = [];
//
//   loading: boolean = false;
//
//   constructor(private customerService: CustomerService, private primengConfig: PrimeNGConfig) { }
//
//   ngOnInit() {
//     //datasource imitation
//     this.customerService.getCustomersLarge().then(data => {
//       this.datasource = data;
//       this.totalRecords = data.length;
//     });
//
//     this.loading = true;
//     this.primengConfig.ripple = true;
//   }
//
//   loadCustomers(event: LazyLoadEvent) {
//     this.loading = true;

    // in a real application, make a remote request to load data using state metadata from event
    // event.first = First row offset
    // event.rows = Number of rows per page
    // event.sortField = Field name to sort with
    // event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    // filters: FilterMetadata object having field as key and filter value, filter matchMode as value
    //
    // imitate db connection over a network
    // setTimeout(() => {
    //   if (this.datasource) {
    //     this.customers = this.datasource.slice(event.first, (event.first + event.rows));
    //     this.loading = false;
    //   }
    // }, 1000);
  // }

// }

import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import {CustomerService} from "../../services/customerservice";
import {Customer} from "../../common/Customer";

@Component({
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];

  totalRecords: number = 0;

  cols: any[] = [];

  loading: boolean = false;


  selectAll: boolean = false;

  selectedCustomers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.loading = true;
  }

  loadCustomers(event: LazyLoadEvent) {
    this.loading = true;

    // setTimeout(() => {
    //   this.customerService.getCustomers({lazyEvent: JSON.stringify(event)}).then(res => {
    //     this.customers = res.customers;
    //     this.totalRecords = res.totalRecords;
    //     this.loading = false;
    //   })
    // }, 1000);
  }

  onSelectionChange(value = []) {
    this.selectAll = value.length === this.totalRecords;
    this.selectedCustomers = value;
  }

  // onSelectAllChange(event) {
  //   const checked = event.checked;
  //
  //   if (checked) {
  //     this.customerService.getCustomers().then(res => {
  //       this.selectedCustomers = res.customers;
  //       this.selectAll = true;
  //     });
  //   }
  //   else {
  //     this.selectedCustomers = [];
  //     this.selectAll = false;
  //   }
  // }
}
