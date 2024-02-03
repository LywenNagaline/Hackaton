import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {JobOfferComponent} from "./job-offer/job-offer.component";
import {HOME_PATH, LOGIN_PATH} from "./core/constants/app.constant";
import {AuthGuard} from "./core/guards/authorization.guard";
import { PageTestComponent } from './page-test/page-test.component';

export const routes: Routes = [
  {path: LOGIN_PATH, component: LoginComponent},
  {path: "", redirectTo: LOGIN_PATH, pathMatch: "full"},
  {path: HOME_PATH, component: JobOfferComponent, canActivate : [AuthGuard]},
  {path: "test", component: PageTestComponent},
];
