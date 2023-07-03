import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor(private http: HttpClient) { }

  uploadCsv(file) {
    const uploadedFile = new FormData();
    uploadedFile.append( 'uploadedFile', new Blob([file], { type: 'multipart/form-data'}), file.name);
    const url = environment.apiUrl + 'csv/participant_biosample';
    
    return this.http.post(url, uploadedFile)
  }
}
