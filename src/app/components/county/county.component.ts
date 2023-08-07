import { Component, OnInit } from '@angular/core';
import {County} from "../../common/County";
import {ConfirmationService, LazyLoadEvent, MessageService} from "primeng/api";
import {CountyService} from "../../services/county.service";
import {City} from "../../common/City";
import {FieldInfo} from "../../FieldInfo";

@Component({
  selector: 'app-county',
  templateUrl: './county.component.html',
  styleUrls: ['./county.component.scss']
})
export class CountyComponent implements OnInit {

  fields: FieldInfo[] = []

  counties: County[] = [];
  totalRecords: number = 0;
  loading: boolean = false;
  countyDialog: any;
  county: County = new County();
  submitted: boolean = false;

  constructor(public countyService: CountyService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.loading = true;
    this.fields = [
      {
        name: 'countyId',
        title: 'County Id'
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

  openNew() {
    this.county = new County();
    this.submitted = false;
    this.countyDialog = true;

  }

  edit(county: any) {
    this.county = {...county};
    this.countyDialog = true;

  }

  delete(county: any) {
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
