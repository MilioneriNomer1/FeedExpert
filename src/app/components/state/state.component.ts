import { Component, OnInit } from '@angular/core';
import {State} from "../../common/State";
import {StateService} from "../../services/state.service";
import {LazyLoadEvent} from "primeng/api";
import {BatchService} from "../../services/batch.service";

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  states: State[] = [];
  totalRecords: number = 0;
  loading: boolean = false;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.loading = true;
  }

  loadStates(event: LazyLoadEvent) {
    this.loading = true;
debugger
    setTimeout(() => {
      // @ts-ignore
      this.stateService.getState({lazyEvent: JSON.stringify(event)}).then(res => {
        this.states = res;
        this.totalRecords = res.length;
        this.loading = false;
      })
    }, 1000);
  }

}
