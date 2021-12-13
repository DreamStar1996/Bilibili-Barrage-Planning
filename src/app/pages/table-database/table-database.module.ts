import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatTableModule } from "@angular/material/table";
import { NzTableModule } from "ng-zorro-antd/table";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { NgxDatabaseComponent } from "./ngx-database/ngx-database.component";
import { ZorroDatabaseComponent } from "./zorro-database/zorro-database.component";
import { NgDatabaseComponent } from "./ng-database/ng-database.component";

const routes: Routes = [
  {
    path: "ngx-database",
    component: NgxDatabaseComponent,
  },
  {
    path: "zorro-database",
    component: ZorroDatabaseComponent,
  },
  {
    path: "ng-database",
    component: NgDatabaseComponent,
  },
];

@NgModule({
  declarations: [
    NgxDatabaseComponent,
    ZorroDatabaseComponent,
    NgDatabaseComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgxDatatableModule,
    MatTableModule,
    NzTableModule,
    MatInputModule,
    FormsModule,
    NzFormModule,
    NzSwitchModule,
    NzRadioModule,
    NzDividerModule
  ],
  exports: [RouterModule],
})
export class TableDatabaseModule {}
