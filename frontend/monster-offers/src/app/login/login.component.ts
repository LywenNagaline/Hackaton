import {Component, OnDestroy, OnInit} from '@angular/core';
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService} from "../core/services/authentication.service";
import {Subscription} from "rxjs";
import {AuthRequest, AuthResponse} from "../core/models/auth.model";
import {Router} from "@angular/router";
import {HOME_PATH} from "../core/constants/app.constant";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CheckboxModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy{

  loginFormGroup! : FormGroup;
  authSubscription$! :Subscription;

  constructor(private fb : FormBuilder, private authService : AuthenticationService, private router : Router) { }

  ngOnInit(): void {
    this.loginFormGroup=this.fb.group({
      email : this.fb.control(''),
      password : this.fb.control('')
    });
  }

  ngOnDestroy(): void {
    if(this.authSubscription$!=undefined)
      this.authSubscription$.unsubscribe();
  }


  handleLogin() {
    const authRequest: AuthRequest = {
       email : this.loginFormGroup.value.email,
       password : this.loginFormGroup.value.password
    };
    this.authSubscription$ =  this.authService.login(authRequest).subscribe({
      next: (resp: AuthResponse) => {
        this.authService.authenticateUser(resp).subscribe(value => {
            this.router.navigateByUrl(HOME_PATH).then();
        });

      }
    });

  }
}
