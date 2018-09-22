import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SocketioService } from './shared/socketio.service';

@Component({
  selector: 'app-codeshare',
  templateUrl: './codeshare.component.html',
  styleUrls: ['./codeshare.component.css']
})
export class CodeshareComponent implements OnInit {
  ioConnection: any;
  text: string;
  /* options: any = { maxLines: 1000, printMargin: true }; */
  constructor(private socketService: SocketioService) { }

  ngOnInit() {
    this.initIOConnection();
  }
  private initIOConnection(): void {
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onContent()
      .subscribe((data: any) => {
        console.log('Message from server : ' + data);
        this.text = data;
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

  /* public sendContent(content: any): void {
    if (!content) {
      return;
    }
    this.socketService.send(content);
  } */

  onChange(content) {
    console.log('new code', content);
    if (!content) {
      return;
    }
    this.socketService.send(content);
  }
}
