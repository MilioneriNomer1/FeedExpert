import { Component, OnInit } from '@angular/core';
import {County} from "../../common/County";
import {ConfirmationService, LazyLoadEvent, MessageService} from "primeng/api";
import {CountyService} from "../../services/county.service";
import {City} from "../../common/City";

@Component({
  selector: 'app-county',
  templateUrl: './county.component.html',
  styleUrls: ['./county.component.scss']
})
export class CountyComponent implements OnInit {

  counties: County[] = [];
  totalRecords: number = 0;
  loading: boolean = false;
  countyDialog: any;
  county: County = new County();
  submitted: boolean = false;

  constructor(private countyService: CountyService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

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

  openNew() {
    this.county = new County();
    this.submitted = false;
    this.countyDialog = true;

  }

  editCounty(county: any) {
    this.county = {...county};
    this.countyDialog = true;

  }

  deleteCounty(county: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + county.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'County Deleted', life: 3000})
      }
    });

  }

  hideDialog() {
    this.countyDialog = false;
    this.submitted = false;

  }

  saveCounty() {
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'County Updated', life: 3000});
    this.countyDialog = false;
  }
}
