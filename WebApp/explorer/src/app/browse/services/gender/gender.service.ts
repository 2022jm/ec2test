import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map, Observable, tap, catchError, of, EMPTY } from 'rxjs';

const GENDER_API = environment.apiUrl + 'gender'

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  allGenders$: Observable<any[]> = this.http.get<any[]>(GENDER_API).pipe(
    catchError(this.handleError)
  );

  constructor(private http: HttpClient, public router: Router) { }

  // public getAllGenders(): Observable<any> {
  //   return this.http.get(GENDER_API);
  // }

  private handleError(error: HttpErrorResponse) {
    console.error(error);

    // TODO: capture error, do something if needed, send to logging infrastructure
    
    return EMPTY;
  }
}
