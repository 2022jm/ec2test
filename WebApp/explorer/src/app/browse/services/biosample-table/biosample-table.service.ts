import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const BIOSAMPLE_API = environment.apiUrl + 'participant-biosample/tab';

@Injectable({
  providedIn: 'root'
})
export class BiosampleTableService {

  biosamples$: Observable<any> = this.http.get(BIOSAMPLE_API);

  constructor(private http: HttpClient, public router: Router) { }

  public getAllBiosamples(): Observable<any> {
    return this.http.get(BIOSAMPLE_API);
  }
}
