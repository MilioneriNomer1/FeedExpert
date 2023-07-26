import { Component, OnInit } from '@angular/core';
import {State} from "../../common/State";
import {Sample} from "../../common/Sample";
import {StateService} from "../../services/state.service";
import {SampleService} from "../../services/sample.service";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  samples: Sample[] = [];
  totalRecords: number = 0;
  loading: boolean = false;

  constructor(private sampleService: SampleService) { }

  ngOnInit(): void {
    this.loading = true;
  }

  loadSamples(event: LazyLoadEvent) {
    this.loading = true;
    debugger
    setTimeout(() => {
      // @ts-ignore
      this.sampleService.getSample({lazyEvent: JSON.stringify(event)}).then(res => {
        this.samples = res;
        this.totalRecords = res.length;
        this.loading = false;
      })
    }, 1000);
  }

}
