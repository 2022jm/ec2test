import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const PHENOTYPE_API = environment.apiUrl + 'participant-phenotypes';

@Injectable({
  providedIn: 'root'
})
export class PhenotypeTableService {

  phenotypes$: Observable<any> = this.http.get(PHENOTYPE_API);

  constructor(private http: HttpClient, public router: Router) { }

  public getAllParticipantPhenotypes(): Observable<any> {
    return this.http.get(PHENOTYPE_API);
  }
}
