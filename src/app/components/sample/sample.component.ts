import { Component, OnInit } from '@angular/core';
import {Sample} from "../../common/Sample";
import {SampleService} from "../../services/sample.service";
import {ConfirmationService, LazyLoadEvent, MessageService} from "primeng/api";
import {FieldInfo} from "../../FieldInfo";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  fields: FieldInfo[] = [];

  totalRecords: number = 0;
  loading: boolean = false;
  sampleDialog: any;
  sample: Sample = new Sample();
  submitted: boolean = false;

  constructor(public sampleService: SampleService, private messageService: MessageService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.fields = [
      {
        name: 'resultDate',
        title: 'Result Date'
      },
      {
        name: 'expectedValue',
        title: 'Expected Value'
      },
      {
        name: 'actualValue',
        title: 'Actual Value'
      },
      {
        name: 'meetSpecs',
        title: 'Meet Specs'
      }
    ];
  }

  hideDialog() {
    this.sampleDialog = false;
    this.submitted = false;
  }

  openNew() {
    this.sample = new Sample();
    this.submitted = false;
    this.sampleDialog = true;
  }

  edit(sample: any) {
    this.sample = {...sample};
    this.sampleDialog = true;
    this.submitted = false;
  }
  saveSample() {
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'Sample Updated', life: 3000});
    this.sampleDialog = false;
  }

  delete(sample: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + sample.resultDate + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity: 'warn', summary: 'Successful', detail: 'Sample Deleted', life: 3000})
      }
    });
  }

}
