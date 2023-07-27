import { Component, OnInit } from '@angular/core';
import {Substance} from "../../common/Substance";
import {SubstanceService} from "../../services/substance.service";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-substance',
  templateUrl: './substance.component.html',
  styleUrls: ['./substance.component.scss']
})
export class SubstanceComponent implements OnInit {

  substances: Substance[] = [];
  totalRecords: number = 0;
  loading: boolean = false;

  constructor(private substanceService: SubstanceService) { }

  ngOnInit(): void {
    this.loading = true;
  }

  loadSubstances(event: LazyLoadEvent) {
    this.loading = true;
    setTimeout(() => {
      // @ts-ignore
      this.substanceService.getSubstance({lazyEvent: JSON.stringify(event)}).then(res => {
        // @ts-ignore
        this.substances = res.slice(event.first,event.rows + event.first);
        this.totalRecords = res.length;
        this.loading = false;
      })
    }, 1000);
  }

}
