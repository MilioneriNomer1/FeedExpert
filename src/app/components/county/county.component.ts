import { Component, OnInit } from '@angular/core';
import {State} from "../../common/State";
import {County} from "../../common/County";
import {StateService} from "../../services/state.service";
import {LazyLoadEvent} from "primeng/api";
import {CountyService} from "../../services/county.service";

@Component({
  selector: 'app-county',
  templateUrl: './county.component.html',
  styleUrls: ['./county.component.scss']
})
export class CountyComponent implements OnInit {

  counties: County[] = [];
  totalRecords: number = 0;
  loading: boolean = false;

  constructor(private countyService: CountyService) { }

  ngOnInit(): void {
    this.loading = true;
  }
  loadCounties(event: LazyLoadEvent) {
    this.loading = true;
    debugger
    setTimeout(() => {
      // @ts-ignore
      this.countyService.getCounty({lazyEvent: JSON.stringify(event)}).then(res => {
        // @ts-ignore
        this.counties = res.slice(event.first,event.rows + event.first);
        this.totalRecords = res.length;
        this.loading = false;
      })
    }, 1000);
  }

}
