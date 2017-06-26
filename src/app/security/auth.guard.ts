import { Injectable } from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';
import { LoginService } from '../pages/login/login.service';
import {AuthService} from "../pages/auth.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(public authService: AuthService,private router: Router) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.authService.isLoggedIn()){
       return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }

  }


}
