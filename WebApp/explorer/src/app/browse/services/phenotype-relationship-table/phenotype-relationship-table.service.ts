import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const PHENOTYPE_RELATIONSHIP_API = environment.apiUrl + 'phenotype-phenotype-relationship';

@Injectable({
  providedIn: 'root'
})
export class PhenotypeRelationshipTableService {

  phenotypesRelationship$: Observable<any> = this.http.get(PHENOTYPE_RELATIONSHIP_API);

  constructor(private http: HttpClient, public router: Router) { }

  public getAllParticipantPhenotypes(): Observable<any> {
    return this.http.get(PHENOTYPE_RELATIONSHIP_API);
  }
}
