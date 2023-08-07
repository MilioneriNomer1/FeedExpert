import { Component, OnInit } from '@angular/core';
import {Substance} from "../../common/Substance";
import {SubstanceService} from "../../services/substance.service";
import {ConfirmationService, LazyLoadEvent, MessageService} from "primeng/api";
import {FieldInfo} from "../../FieldInfo";

@Component({
  selector: 'app-substance',
  templateUrl: './substance.component.html',
  styleUrls: ['./substance.component.scss']
})
export class SubstanceComponent implements OnInit {

  fields: FieldInfo[] = [];

  totalRecords: number = 0;
  loading: boolean = false;
  substanceDialog: any;
  substance: Substance = new Substance();
  submitted: boolean = false;

  constructor(public substanceService: SubstanceService, private messageService: MessageService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.fields = [
      {
        name: 'substanceId',
        title: 'Substance Id'
      },
      {
        name: 'name',
        title: 'Name'
      }
    ];
  }

  hideDialog() {
    this.substanceDialog = false;
    this.submitted = false;
  }

  openNew() {
    this.substance = new Substance();
    this.submitted = false;
    this.substanceDialog = true;
  }

  edit(substance: any) {
    this.substance = {...substance};
    this.substanceDialog = true;
    this.submitted = false;
  }
  saveSubstance() {
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'Substance Updated', life: 3000});
    this.substanceDialog = false;
  }

  delete(substance: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + substance.resultDate + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity: 'warn', summary: 'Successful', detail: 'Substance Deleted', life: 3000})
      }
    });
  }

}

