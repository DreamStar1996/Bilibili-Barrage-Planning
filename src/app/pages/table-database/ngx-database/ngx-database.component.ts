import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-ngx-database',
  templateUrl: './ngx-database.component.html',
  styleUrls: ['./ngx-database.component.scss'],
})
export class NgxDatabaseComponent implements OnInit {
  @ViewChild('myTable',{static:true}) table: any;

  rows: any[] = [];
  expanded: any = {};
  timeout: any;

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch((data: any[]) => {
      this.rows = data;
    });
  }

  ngOnInit(): void {}

  onPage(event: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  fetch(cb: { (data: any[]): void; (arg0: any): void; }) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  toggleExpandRow(row: any) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event: any) {
    console.log('Detail Toggled', event);
  }
}
