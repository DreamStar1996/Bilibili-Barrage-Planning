import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormListComponent } from "./form-list/form-list.component";
import { ApiTestComponent } from "./api-test/api-test.component";

import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { NzTableModule } from 'ng-zorro-antd/table';

const routes: Routes = [
  {
    path: "form-test",
    component: FormListComponent,
  },
  {
    path: "api-test",
    component: ApiTestComponent,
  }
];

@NgModule({
  declarations: [FormListComponent, ApiTestComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatButtonToggleModule,
    NzTableModule
  ],
  exports: [RouterModule],
})
export class TestIndexModule {}
