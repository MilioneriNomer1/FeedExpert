import { Component, OnInit } from '@angular/core';
import {LazyLoadEvent} from "primeng/api";
import {CityService} from "../../services/city.service";
import {City} from "../../common/City";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  cities: City[] = [];
  totalRecords: number = 0;
  loading: boolean = false;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.loading = true;
  }
  loadCities(event: LazyLoadEvent) {
    this.loading = true;
    debugger
    setTimeout(() => {
      // @ts-ignore
      this.cityService.getCity({lazyEvent: JSON.stringify(event)}).then(res => {
        this.cities = res;
        this.totalRecords = res.length;
        this.loading = false;
      })
    }, 1000);
  }
}
