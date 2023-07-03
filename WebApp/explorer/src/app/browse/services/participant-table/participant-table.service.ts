import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const PARTICIPANT_API = environment.apiUrl + 'participant/tab';

@Injectable({
  providedIn: 'root'
})
export class ParticipantTableService{

  participants$: Observable<any> = this.http.get(PARTICIPANT_API);

  constructor(private http: HttpClient, public router: Router) { }


  public getAllParticipants(): Observable<any> {
    return this.http.get(PARTICIPANT_API);
  }
}
