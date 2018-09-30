import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import * as SharedConstants from '../../shared/shared.constants';
const API = SharedConstants.SERVER.API_URL;
@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  constructor(private httpClient: HttpClient) { }
  contactMessage = (messageObject: any): Observable<any> => {
    console.log(messageObject.value);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Cache-Control': 'no-cache'
    });
    const options = {
      headers: httpHeaders
    };
    return this.httpClient.post(`${API}/contactMessage`, messageObject.value, options).pipe(
      map(res => res),
      catchError(this.handleError),
    );
  }
  private handleError(error: any) {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(error);
  }
}


