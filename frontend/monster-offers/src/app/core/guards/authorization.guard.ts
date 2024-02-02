import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {inject, Injectable} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
import {LOGIN_PATH} from "../constants/app.constant";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard {

  constructor(private router: Router, private authService : AuthenticationService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.isAuthenticated()){
      return true;
    } else {
      this.router.navigateByUrl(LOGIN_PATH).then();
      return false;
    }
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthorizationGuard).canActivate(next, state);
}
