import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const NGA_RNA_API = environment.apiUrl + 'spike';

@Injectable({
  providedIn: 'root'
})
export class NgsRnaTableService {

  ngsRna$: Observable<any> = this.http.get(NGA_RNA_API);

  constructor(private http: HttpClient, public router: Router) { }

  public getAllParticipantPhenotypes(): Observable<any> {
    return this.http.get(NGA_RNA_API);
  }
}
