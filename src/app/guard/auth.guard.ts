import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router'
import { Observable } from 'rxjs'
import { KernelService } from '../service/kernel.service'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanDeactivate<any> {
  constructor(private kernelService: KernelService, private router: Router) {}
  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot | undefined,
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log(component)
    console.log(currentRoute)
    console.log(currentState)
    console.log(nextState)
    return true;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.kernelService.isLogin) {
      return true
    } else {
      this.router.navigate(['/main/login'])
      return false
    }
  }
}
