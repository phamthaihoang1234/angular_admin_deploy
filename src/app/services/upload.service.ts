import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url = environment.API_SERVER + 'api/auth/upload-file';


  // url = "http://localhost:8080/api/auth/upload-file";

  constructor(private http: HttpClient) { }

  

  

  uploadCustomer(file: File): Observable<any> {
    const data: FormData = new FormData();
    data.append('file', file);
    return this.http.post(this.url, data)
  }

}
