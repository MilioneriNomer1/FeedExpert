import { Component, OnInit } from '@angular/core';
import {Batch} from "../../common/Batch";
import {StateService} from "../../services/state.service";
import {BatchService} from "../../services/batch.service";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {

  batches: Batch[] = [];
  totalRecords: number = 0;
  loading: boolean = false;
  constructor(private batchService: BatchService) { }

  ngOnInit(): void {
    this.loading = true;
  }

  loadBatches(event: LazyLoadEvent) {
    this.loading = true;
    debugger
    setTimeout(() => {
      // @ts-ignore
      this.batchService.getBatch({lazyEvent: JSON.stringify(event)}).then(res => {
        this.batches = res;
        this.totalRecords = res.length;
        this.loading = false;
      })
    }, 1000);
  }
}
