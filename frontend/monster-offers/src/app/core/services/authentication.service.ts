import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {AppUser} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {AuthRequest, AuthResponse} from "../models/auth.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authenticatedUser : AppUser | undefined ;
  constructor(private httpClient: HttpClient) {}

  public login(authRequest : AuthRequest): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(environment.loginBackendHost, authRequest);
  }

  public authenticateUser(authResponse : AuthResponse):Observable<boolean>{
    const user : AppUser = {
      userId : authResponse.userId
    }
    this.authenticatedUser=user;
    localStorage.setItem("authUser", JSON.stringify({userId :user.userId,  token : authResponse.jwt}));
    return of(true);
  }
  public logout(){
    this.authenticatedUser=undefined;
    localStorage.removeItem("authUser");
    return of(true);
  }

  public isAuthenticated():boolean{
    return this.authenticatedUser!=undefined;
  }

}
