import { Component, OnInit } from '@angular/core';
import {Batch} from "../../common/Batch";
import {BatchService} from "../../services/batch.service";
import {ConfirmationService, LazyLoadEvent, MessageService} from "primeng/api";
import {Product} from "../../common/Product";

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {

  batches: Batch[] = [];
  batch: Batch = new Batch();
  totalRecords: number = 0;
  loading: boolean = false;
  batchDialog: boolean = false;
  submitted: boolean = false;
  //product: Product = new Product();

  constructor(private batchService: BatchService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.loading = true;
  }

  loadBatches(event: LazyLoadEvent) {
    this.loading = true;
    debugger
    setTimeout(() => {
      // @ts-ignore
      this.batchService.getBatch({lazyEvent: JSON.stringify(event)}).then(res => {
        // @ts-ignore
        this.batches = res.slice(event.first,event.rows + event.first);
        this.totalRecords = res.length;
        this.loading = false;
      })
    }, 1000);
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
      message: 'Are you sure you want to delete ' + batch.scNumber + '?',
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
