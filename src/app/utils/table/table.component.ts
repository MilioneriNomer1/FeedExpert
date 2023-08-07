import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FieldInfo} from "../../FieldInfo";
import {LazyLoadEvent} from "primeng/api";
import * as url from "url";
import {BaseOperationService} from "../../services/baseoperation.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() fields: FieldInfo[] = [];
  @Input() baseOperationService: any;

  @Output() editModelEvent: EventEmitter<any> = new EventEmitter();
  @Output() deleteModelEvent: EventEmitter<any> = new EventEmitter();
  @Output() newModelEvent: EventEmitter<any> = new EventEmitter();

  totalRecords: number = 0;
  loading: boolean = false;
  data: any[] = [];

  constructor(private http:HttpClient) { }


  loadData(event: LazyLoadEvent) {
    this.loading = true;
    setTimeout(() => {
      // @ts-ignore
      this.baseOperationService.page(event.first, event.rows).then(res => {
        // @ts-ignore
        this.data = res.slice(event.first,event.rows + event.first);
        this.totalRecords = res.length;
        this.loading = false;
      })
    }, 1000);
  }

  ngOnInit(): void {
  }

  newModel() {
    this.editModelEvent.emit()
  }

  editModel(row: any) {
    this.editModelEvent.emit(row);
  }

  deleteModel(row: any) {
    this.deleteModelEvent.emit(row);
  }
}
