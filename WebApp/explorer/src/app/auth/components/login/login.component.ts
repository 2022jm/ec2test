import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public email: string;
  public password: string;

  private loginSubscription$: Subscription;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.loginSubscription$.unsubscribe();
  }


  login(): void {
    const user = { email: this.email, password: this.password };

    this.loginSubscription$ = this.authService.login(user).subscribe();
  }

  logout(): void {
    this.authService.logout();
  }
}
