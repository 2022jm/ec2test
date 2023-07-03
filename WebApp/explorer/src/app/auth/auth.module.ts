import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: AuthService.getToken,
        allowedDomains: environment.allowedDomains
      }
    })
  ]
})
export class AuthModule { }
