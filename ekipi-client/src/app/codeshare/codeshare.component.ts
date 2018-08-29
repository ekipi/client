import { Component, OnInit } from '@angular/core';
import { SocketioService } from './shared/socketio.service';

@Component({
  selector: 'app-codeshare',
  templateUrl: './codeshare.component.html',
  styleUrls: ['./codeshare.component.css']
})
export class CodeshareComponent implements OnInit {
  ioConnection: any;
  dataContent: string;
  constructor(private socketService: SocketioService) { }

  ngOnInit() {
    this.initIOConnection();
  }
  private initIOConnection(): void {
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onContent()
      .subscribe((data: any) => {
        this.dataContent = data;
      });
    this.socketService.onEvent('connect')
      .subscribe(() => {
        this.socketService.session('dummy'); // emit a session id that is unique for a meeting
        console.log('connected');
      });
    this.socketService.onEvent('disconnect')
      .subscribe(() => {
        console.log('disconnected');
      });
  }

  public sendContent(content: any): void {
    if (!content) {
      return;
    }
    this.socketService.send(content);
  }
}
