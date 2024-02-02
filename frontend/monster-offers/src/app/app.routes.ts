import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {JobOfferComponent} from "./job-offer/job-offer.component";
import {HOME_PATH, LOGIN_PATH} from "./core/constants/app.constant";
import {AuthGuard} from "./core/guards/authorization.guard";

export const routes: Routes = [
  {path: LOGIN_PATH, component: LoginComponent},
  {path: "", redirectTo: LOGIN_PATH},
  {path: HOME_PATH, component: JobOfferComponent, canActivate : [AuthGuard]},
];
