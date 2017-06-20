import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../pages/login/login.service';
import {AuthService} from "../pages/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate() {
    return this.authService.isLoggedIn();
  }
}
