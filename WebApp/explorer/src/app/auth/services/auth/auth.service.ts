import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalUser } from '../../interface/localuser';
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment'

const jwtHelper = new JwtHelperService();
const LOGIN_API = environment.apiUrl + 'auth/login';
const REFRESH_API = environment.apiUrl + 'auth/refresh';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public localUser$: BehaviorSubject<LocalUser>;

  constructor(private http: HttpClient, public router: Router) { }

  public login(user: any) {

    return this.http.post(LOGIN_API, user).pipe(
      map( (data: any) => {
        const jwtPayload = jwtHelper.decodeToken(data.accessToken);
        if (jwtPayload) {
          // save localUser data
          this.setLocalUser(jwtPayload);
  
          // store token
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);

          // TODO: change it
          this.router.navigateByUrl('/home');
        } else {
          // TODO: notify login error
        }
      })
    )
  }

  public logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.router.navigateByUrl('/login');
  }

  public refreshToken() {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post(REFRESH_API, { "refreshToken": refreshToken }).pipe(
      map( (data: any) => {
        const jwtPayload = jwtHelper.decodeToken(data.accessToken);
        if (jwtPayload) {
          this.setLocalUser(jwtPayload);

          console.log("Token refreshed", data.accessToken);
          localStorage.setItem('accessToken', data.accessToken);
        }
      })
    )
  }

  public setLocalUser(user: LocalUser) {
    this.localUser$ = new BehaviorSubject(user);
  }

  public static getToken(): string | null {
    return localStorage.getItem('accessToken');
  }
}
