import { Component, OnInit } from '@angular/core';
import {User} from "../../common/User";
import {UserService} from "../../services/user.service";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  totalRecords: number = 0;
  loading: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loading = true;
  }

  loadUsers(event: LazyLoadEvent) {
    this.loading = true;
    setTimeout(() => {
      // @ts-ignore
      this.userService.getUser({lazyEvent: JSON.stringify(event)}).then(res => {
        this.users = res;
        this.totalRecords = res.length;
        this.loading = false;
      })
    }, 1000);
  }

}
