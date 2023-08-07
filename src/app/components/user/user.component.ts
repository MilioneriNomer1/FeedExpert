import { Component, OnInit } from '@angular/core';
import {User} from "../../common/User";
import {UserService} from "../../services/user.service";
import {ConfirmationService, LazyLoadEvent, MessageService} from "primeng/api";
import {FieldInfo} from "../../FieldInfo";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  fields: FieldInfo[] = [];

  totalRecords: number = 0;
  loading: boolean = false;
  userDialog: any;
  user: User = new User();
  submitted: boolean = false;

  constructor(public userService: UserService, private messageService: MessageService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.fields = [
      {
        name: 'email',
        title: 'Email'
      },
      {
        name: 'name',
        title: 'Name'
      },
      {
        name: 'active',
        title: 'Active'
      }
    ];
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }

  openNew() {
    this.user = new User();
    this.submitted = false;
    this.userDialog = true;
  }

  edit(user: any) {
    this.user = {...user};
    this.userDialog = true;
    this.submitted = false;
  }
  saveUser() {
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Updated', life: 3000});
    this.userDialog = false;
  }

  delete(user: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.email + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity: 'warn', summary: 'Successful', detail: 'User Deleted', life: 3000})
      }
    });
  }

}

