import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const SERVER_API_URL = 'http://142.93.223.220:4200/api';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }

  getSession(sessionId): any {
    return this.httpClient.get(`${SERVER_API_URL}/session/` + sessionId);
  }

  createSession(sessionObject: any): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Cache-Control': 'no-cache'
    });
    const options = {
      headers: httpHeaders
    };
    return this.httpClient.post(`${SERVER_API_URL}/createSession`, sessionObject, options);
  }
}
