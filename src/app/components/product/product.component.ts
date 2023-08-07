import { Component, OnInit } from '@angular/core';
import {Product} from "../../common/Product";
import {ProductService} from "../../services/product.service";
import {ConfirmationService, LazyLoadEvent, MessageService} from "primeng/api";
import {FieldInfo} from "../../FieldInfo";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  fields: FieldInfo[] = [];

  totalRecords: number = 0;
  loading: boolean = false;
  productDialog: any;
  product: Product = new Product();
  submitted: boolean = false;

  constructor(public productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.loading = true;
    this.fields = [
      {
        name: 'name',
        title: 'Name'
      },
      {
        name: 'itemId',
        title: 'Item Id'
      },
    ];
  }

  openNew() {
    this.product = new Product();
    this.submitted = false;
    this.productDialog = true;
  }

  edit(product: any) {
    this.product = {...product};
    this.productDialog = true;
    this.submitted = false;

  }

  delete(product: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity:'warn', summary: 'Successful', detail: 'Product Deleted', life: 3000})
      }
    });

  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;

  }

  saveProduct() {
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
    this.productDialog = false;
  }
}


