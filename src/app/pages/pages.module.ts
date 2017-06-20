import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';


import { Pages } from './pages.component';
import {AuthGuard} from "../class/AuthGuard";
import {LoginService} from "./login/login.service";
import {AuthService} from "./auth.service";

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages],
  providers:[
    AuthGuard,
    AuthService

  ]

})
export class PagesModule {
}
