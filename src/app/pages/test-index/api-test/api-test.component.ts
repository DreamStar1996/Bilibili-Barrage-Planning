import { Component, OnInit } from "@angular/core";
import { TestIndexService } from "../test-index.service";

export class FilterElement {
  currentUserGID = "";
}
@Component({
  selector: "app-api-test",
  templateUrl: "./api-test.component.html",
  styleUrls: ["./api-test.component.scss"],
})
export class ApiTestComponent implements OnInit {
  dataSet: any[] = [];

  tabledata: FilterElement = new FilterElement();

  searchForm: any;

  constructor(private db: TestIndexService) {}

  ngOnInit() {

    //get 请求
    this.tabledata.currentUserGID = "7000020126";
    this.db.getReportMenu(this.tabledata).subscribe((x) => {
      this.dataSet = x;
    });

    //post 请求
    let data;
    let content;
    this.searchForm = {
      id: data.applicationId,
      bundleID: data.bundleID,
      content: content,
    };
    let observable = this.db.findOrder(this.searchForm);
  }
}
