import { Component, OnInit } from '@angular/core';
import {Customer} from "../../common/Customer";
import {CustomerService} from "../../services/customer.service";
import {ConfirmationService, LazyLoadEvent, MessageService} from "primeng/api";
import {FieldInfo} from "../../FieldInfo";
import {City} from "../../common/City";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  fields: FieldInfo[] = [];
  cities: City[] = [];
  selectedCity: City = new City();

  totalRecords: number = 0;
  loading: boolean = false;
  customerDialog: any;
  customer: Customer = new Customer();
  submitted: boolean = false;

  constructor(public customerService: CustomerService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.loading = true;
    this.fields = [
      {
        name: 'company',
        title: 'Company'
      },
      {
        name: 'phone',
        title: 'Phone'
      },
      {
        name: 'address',
        title: 'Address'
      }
    ];
  }

  openNew() {
    this.customer = new Customer();
    this.submitted = false;
    this.customerDialog = true;
  }

  edit(customer: any) {
    this.customer = {...customer};
    this.customerDialog = true;

  }

  delete(customer: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + customer.company + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity:'warn', summary: 'Successful', detail: 'Customer Deleted', life: 3000})
      }
    });

  }

  hideDialog() {
    this.customerDialog = false;
    this.submitted = false;

  }

  saveCounty() {
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'Customer Updated', life: 3000});
    this.customerDialog = false;
  }
}


