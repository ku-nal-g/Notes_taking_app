import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  baseUrl = "assets/db.json";

  constructor(private http: HttpClient) { }

  getTableData():Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
