import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http:HttpClient) { }


  googleSheetUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=xVJGAh5usKJv-6sW4YVj14wAlwXITxSZj1XGtCTsvGKy1HbONCp7zbxozCpQl16ksaoxcGG6Jpl2wkg1IdcgxcVMSwGlh4Nym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFaL-W0FBYtCa-3uDekW9nB5i559PLmaMILoiPZlxduQ3EqXhD90nWnxME764GKkdJeRuQXWJgvWUU7Z7KErj0epxMBz1zrGBNz9Jw9Md8uu&lib=Mp-KIzC20nSvQm7mC6JAu_woBqQL6oTbp';

  getGoogleSheetValue():Observable<any>{
      return this.http.get(this.googleSheetUrl);
  }



}
