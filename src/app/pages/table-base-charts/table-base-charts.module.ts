import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { MatGridListModule } from "@angular/material/grid-list";
import { NgxChartsComponent } from "./ngx-charts/ngx-charts.component";
import { NgChartsComponent } from "./ng-charts/ng-charts.component";
import { ZorroChartsComponent } from "./zorro-charts/zorro-charts.component";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzIconModule } from "ng-zorro-antd/icon";

const routes: Routes = [
  {
    path: "ngx-charts",
    component: NgxChartsComponent,
  },
  {
    path: "zorro-charts",
    component: ZorroChartsComponent,
  },
  {
    path: "ng-charts",
    component: NgChartsComponent,
  },
];

@NgModule({
  declarations: [NgxChartsComponent, NgChartsComponent, ZorroChartsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatGridListModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NzGridModule,
    NzIconModule,
  ],
  exports: [RouterModule],
})
export class TableBaseChartsModule {}
