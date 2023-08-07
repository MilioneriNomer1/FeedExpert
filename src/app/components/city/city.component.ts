import { Component, OnInit } from '@angular/core';
import {CityService} from "../../services/city.service";
import {City} from "../../common/City";
import {ConfirmationService, LazyLoadEvent, MessageService} from "primeng/api";
import {FieldInfo} from "../../FieldInfo";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  fields: FieldInfo[] = [];

  city: City = new City;
  totalRecords: number = 0;
  loading: boolean = false;
  cityDialog: boolean = false;
  submitted: boolean = false;

  constructor(public cityService: CityService,private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.loading = true;
    this.fields = [
      {
        name: 'cityId',
        title: 'City Id'
      },
      {
        name: 'name',
        title: 'Name'
      },
      {
        name: 'code',
        title: 'Code'
      },
    ];
  }

  delete(city: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + city.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'City Deleted', life: 3000})
      }
    });
  }

  edit(city: any) {
    this.city = {...city};
    this.cityDialog = true;
    this.submitted = false;
  }

  openNew() {
    this.city = new City();
    this.submitted = false;
    this.cityDialog = true;
  }

  hideDialog() {
    this.cityDialog = false;
    this.submitted = false;
  }

  saveCity() {
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'City Updated', life: 3000});
    this.cityDialog = false;
  }
}
