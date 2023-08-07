import { Component, OnInit } from '@angular/core';
import {State} from "../../common/State";
import {StateService} from "../../services/state.service";
import {ConfirmationService, LazyLoadEvent, MessageService} from "primeng/api";
import {FieldInfo} from "../../FieldInfo";

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  fields: FieldInfo[] = [];

  totalRecords: number = 0;
  loading: boolean = false;
  stateDialog: any;
  state: State = new State();
  submitted: boolean = false;

  constructor(public stateService: StateService, private messageService: MessageService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.fields = [
      {
        name: 'stateId',
        title: 'State Id'
      },
      {
        name: 'name',
        title: 'Name'
      },
      {
        name: 'code',
        title: 'Code'
      }
    ];
  }

  hideDialog() {
    this.stateDialog = false;
    this.submitted = false;
  }

  openNew() {
    this.state = new State();
    this.submitted = false;
    this.stateDialog = true;
  }

  edit(state: any) {
    this.state = {...state};
    this.stateDialog = true;
    this.submitted = false;
  }
  saveState() {
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'State Updated', life: 3000});
    this.stateDialog = false;
  }

  delete(state: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + state.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity: 'warn', summary: 'Successful', detail: 'State Deleted', life: 3000})
      }
    });
  }

}

