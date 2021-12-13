import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgZorroAntdModule, NZ_I18N, zh_CN } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from "@angular/common";
import zh from "@angular/common/locales/zh";
import { NZ_ICONS } from "ng-zorro-antd";
import { TableDatabaseModule } from "./pages/table-database/table-database.module"
import { TableBaseChartsModule } from "./pages/table-base-charts/table-base-charts.module"
import { TestIndexModule } from "./pages/test-index/test-index.module"
import { NzIconModule } from 'ng-zorro-antd/icon';

registerLocaleData(zh);

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
} from "@ant-design/icons-angular/icons";

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
];

const routes: Routes = [
  {
    path: "",
    component: TableDatabaseModule,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    TableDatabaseModule,
    TableBaseChartsModule,
    TestIndexModule,
    NzIconModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
