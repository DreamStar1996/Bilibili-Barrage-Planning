import { ConnService } from "../utils/conn.service";
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TestIndexService {
  constructor(private http: HttpClient, public conn: ConnService) {}

  getReportMenu(filterpara: any): Observable<any> {
    const addr = "/WeatherForecast";
    const params = {
      //currentUserGID: filterpara.currentUserGID,
    };
    return this.conn.get(addr, params);
  }

  findOrder(searchCond: any): any {
    console.log("searchCond:" + searchCond.id);
    let url = "/api/v1/applications/" + searchCond.id;
    let params: any = {
      BundleID: searchCond.bundleID,
      Content: searchCond.content,
    };
    return this.conn.post(url, params);
  }
}
