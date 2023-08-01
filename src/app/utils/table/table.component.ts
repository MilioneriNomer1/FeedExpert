import {Component, Input, OnInit} from '@angular/core';
import {FieldInfo} from "../../FieldInfo";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() fields: FieldInfo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  openNew() {
  }

  edit() {

  }
}
