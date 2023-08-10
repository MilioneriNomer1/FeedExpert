import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
implements OnInit{
  title = 'FeedExpert';
  items: MenuItem[] = [];

  ngOnInit(): void {

  }


  constructor() {
    this.items = [{
      label: 'Components',
      items: [
        {
          label: 'LogIn',
          routerLink: '/logIn',
        },
        {
          label: 'Batch',
          routerLink: '/batch',
        },
        {
          label: 'City',
          routerLink: '/city',
        },
        {
          label: 'County',
          routerLink: '/county',
        },
        {
          label: 'Customer',
          routerLink: '/customer',
        },
        {
          label: 'Product',
          routerLink: '/product',
        },
        {
          label: 'Sample',
          routerLink: '/sample',
        },
        {
          label: 'State',
          routerLink: '/state',
        },
        {
          label: 'Substance',
          routerLink: '/substance',
        },
        {
          label: 'User',
          routerLink: '/user',
        }
      ]
    }]
  }
}
