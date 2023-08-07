import {Component, OnInit, ViewChild} from '@angular/core';
import {Batch} from "../../common/Batch";
import {BatchService} from "../../services/batch.service";
import {ConfirmationService, LazyLoadEvent, MessageService} from "primeng/api";
import {FieldInfo} from "../../FieldInfo";
import {TableComponent} from "../../utils/table/table.component";

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {

  batch: Batch = new Batch();
  batchDialog: boolean = false;
  submitted: boolean = false;

  fields: FieldInfo[] = [];

  constructor(public batchService: BatchService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.fields = [
      {
        name: 'scNumber',
        title: 'SC Number'
      },
      {
        name: 'receivedDate',
        title: 'Received Date'
      },
      {
        name: 'customerId',
        title: 'Customer Id'
      },
      {
        name: 'remarks',
        title: 'Remarks'
      },
      {
        name: 'internalNotes',
        title: 'Internal Notes'
      }
    ];
  }


  openNew() {

    this.batch = new Batch();
    this.submitted = false;
    this.batchDialog = true;
  }

  saveBatch() {
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'Batch Updated', life: 3000});
    this.batchDialog = false;
  }

  hideDialog() {
    this.batchDialog = false;
    this.submitted = false;
  }

  deleteBatch(batch: Batch) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + batch.remarks + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Batch Deleted', life: 3000})
      }
    });
  }

  editBatch(batch: Batch) {
    this.batch = {...batch};
    this.batchDialog = true;
  }
}
