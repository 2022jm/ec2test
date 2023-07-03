import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, of, mergeMap } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private ignoreUrls: string[];
  constructor(private authService: AuthService) {
    this.ignoreUrls = [
      'auth/login',
      'auth/refresh'
    ]
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Ignore login or refresh requests
    if (this.validateUrl(request.url)) return next.handle(request);
    
    return next.handle(request).pipe(
      // Error 401 Unauthorized means invalid accessToken
      catchError( err => {
        if (err.status == 401) {
          // Refresh the accessToken
          return this.authService.refreshToken().pipe(
            // Resend the request with the new token
            mergeMap(
              () => next.handle(request.clone({
                headers: request.headers.set("Authorization", `Bearer ${localStorage.getItem('accessToken')}`)
              }))
            ),
            //
            // TODO: Capture inbound requests, put them on hold if token is being refreshed
            //
            // On error logout
            catchError(
              err => {
                this.authService.logout();
                return of(err);
              }
            )
          )
        }
        return of(err);
      })
    )
  }

  // Check if the request url routes are in the routes that has to be ignored
  private validateUrl(requestUrl: string): Boolean {
    const positionIndicator = "api/";
    const position = requestUrl.indexOf(positionIndicator);

    if (position > 0) {
      const requestPath = requestUrl.substr(position + positionIndicator.length);
      if (this.ignoreUrls.includes(requestPath)) {
        return true;
      }
    }
    return false;
  }
}
