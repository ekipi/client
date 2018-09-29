import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, of } from 'rxjs';
import * as SharedConstants from '../shared.constants';
@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  private socket;
  constructor() { }
  public initSocket = (): void => {
    console.log("========>");
    console.log(SharedConstants.SERVER.URL);
    this.socket = io(SharedConstants.SERVER.URL);
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
