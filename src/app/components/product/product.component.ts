 import { Component, OnInit } from '@angular/core';
 import {County} from "../../common/County";
 import {Product} from "../../common/Product";
 import {CountyService} from "../../services/county.service";
 import {ProductService} from "../../services/product.service";
 import {LazyLoadEvent} from "primeng/api";
 @Component({
   selector: 'app-product',
   templateUrl: './product.component.html',
   styleUrls: ['./product.component.scss']
 })
 export class ProductComponent implements OnInit {

   products: Product[] = [];
   totalRecords: number = 0;
   loading: boolean = false;

   constructor(private productService: ProductService) { }

   ngOnInit(): void {
     this.loading = true;
   }

   loadProducts(event: LazyLoadEvent) {
     this.loading = true;
     debugger
     setTimeout(() => {
       // @ts-ignore
       this.productService.getProduct({lazyEvent: JSON.stringify(event)}).then(res => {
         this.products = res;
         this.totalRecords = res.length;
         this.loading = false;
       })
     }, 1000);
   }

 }

