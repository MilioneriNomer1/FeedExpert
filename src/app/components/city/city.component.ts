import { Component, OnInit } from '@angular/core';
import {CityService} from "../../services/city.service";
import {City} from "../../common/City";
import {ConfirmationService, LazyLoadEvent, MessageService} from "primeng/api";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  city: City = new City;
  cities: City[] = [];
  totalRecords: number = 0;
  loading: boolean = false;
  cityDialog: boolean = false;
  submitted: boolean = false;

  constructor(private cityService: CityService,private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.loading = true;
  }
  loadCities(event: LazyLoadEvent) {
    this.loading = true;
    debugger
    setTimeout(() => {
      // @ts-ignore
      this.cityService.getCity({lazyEvent: JSON.stringify(event)}).then(res => {
        // @ts-ignore
        this.cities = res.slice(event.first,event.rows + event.first);
        this.totalRecords = res.length;
        this.loading = false;
      })
    }, 1000);
  }

  deleteCity(city: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + city.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'City Deleted', life: 3000})
      }
    });
  }

  editCity(city: any) {
    this.city = {...city};
    this.cityDialog = true;

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
