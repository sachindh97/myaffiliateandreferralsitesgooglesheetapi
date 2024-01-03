import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http:HttpClient) { }


  googleSheetUrl = 'enter_google_sheet_url';

  getGoogleSheetValue():Observable<any>{
      return this.http.get(this.googleSheetUrl);
  }



}
