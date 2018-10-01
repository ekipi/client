import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }

  getSession = (sessionId): any => {
    return this.httpClient.get(`${API}/session/` + sessionId);
  }

  createSession = (sessionObject: any): Observable<any>  => {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Cache-Control': 'no-cache'
    });
    const options = {
      headers: httpHeaders
    };
    return this.httpClient.post(`${API}/createSession`, sessionObject, options);
  }
}
