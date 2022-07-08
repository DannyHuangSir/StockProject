import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  asdf() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5000',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Access-Control-Max-Age': '86400',
      }),
    }

    // return this.http.get<any>(url, {
    //   params: parameter,
    // })

    let url = 'http://localhost:5000/get/taiwan_stock_info'
    return this.http.get<any>(url, httpOptions)
  }
}
