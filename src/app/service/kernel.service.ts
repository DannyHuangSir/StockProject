import { Injectable } from '@angular/core'
import { ParamUrl } from '../model/Configuration'

@Injectable({
  providedIn: 'root',
})
export class KernelService {
  paramUrl?: ParamUrl

  branchInfo?: string

  isLogin: boolean = true

  constructor() {}
}
