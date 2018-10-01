import { ErrorService } from './../../core/errors/error.service';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class SocketioService {

  private socket;
  constructor(private errorService: ErrorService) { }
  public initSocket = (): void => {
    this.socket = io(environment.URL);
  }

  public send = (content: any): void => {
    this.socket.emit('content', content);
  }

  public session = (id: any): void => {
    this.socket.emit('session', id);
  }

  public onContent = (): Observable<any> => {
    return new Observable<any>(observer => {
      this.socket.on('content', (data: any) => observer.next(data));
    });
  }

  public onEvent = (event: any): Observable<any> => {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}
