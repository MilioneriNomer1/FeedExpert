import { Component, OnInit } from '@angular/core';
import {County} from "../../common/County";
import {Customer} from "../../common/Customer";
import {CountyService} from "../../services/county.service";
import {CustomerService} from "../../services/customer.service";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  totalRecords: number = 0;
  loading: boolean = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loading = true;
  }

  loadCustomers(event: LazyLoadEvent) {
    this.loading = true;
    debugger
    setTimeout(() => {
      // @ts-ignore
      this.customerService.getCustomer({lazyEvent: JSON.stringify(event)}).then(res => {
        // @ts-ignore
        this.customers = res.slice(event.first,event.rows + event.first);
        this.totalRecords = res.length;
        this.loading = false;
      })
    }, 1000);
  }

}
