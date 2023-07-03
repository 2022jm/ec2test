import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';
import { CsvComponent } from './components/csv/csv.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseModule } from './browse/browse.module';

@NgModule({
  declarations: [
    AppComponent,
    CsvComponent,
    CreateUserComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    LayoutModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowseModule,
  ],
  // Add interceptor
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
