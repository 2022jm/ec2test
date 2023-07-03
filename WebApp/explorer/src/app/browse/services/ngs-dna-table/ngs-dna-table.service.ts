import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const NGS_DNA_API = environment.apiUrl + 'genome-reference';

@Injectable({
  providedIn: 'root'
})
export class NgsDnaTableService {

  ngsDna$: Observable<any> = this.http.get(NGS_DNA_API);

  constructor(private http: HttpClient, public router: Router) { }

  public getAllParticipantPhenotypes(): Observable<any> {
    return this.http.get(NGS_DNA_API);
  }
}
