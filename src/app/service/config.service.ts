import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { ParamUrl } from '../model/Configuration'

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  getParamUrl(): Observable<ParamUrl> {
    return this.http.get<ParamUrl>(`${environment.url}`)
  }
}
