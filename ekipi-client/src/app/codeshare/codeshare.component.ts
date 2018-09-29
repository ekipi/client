import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SocketioService } from '../shared/socket/socketio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../shared/session/session.service';

@Component({
  selector: 'app-codeshare',
  templateUrl: './codeshare.component.html',
  styleUrls: ['./codeshare.component.css']
})
export class CodeshareComponent implements OnInit {
  ioConnection: any;
  text: string;
  sessionId: string;
  /* options: any = { maxLines: 1000, printMargin: true }; */
  constructor(private socketService: SocketioService,
    private activeRoute: ActivatedRoute, private router: Router,
    private sessionService: SessionService) {
  }

  ngOnInit() {
    // subscribe to the parameters observable
    this.activeRoute.paramMap.subscribe(params => {
      console.log(params.get('sessionId'));
      this.sessionId = params.get('sessionId');
    });
    if (this.sessionId) {
      this.sessionService.getSession(this.sessionId).subscribe(sessionObject => {
        if (sessionObject == null || sessionObject._id == null || sessionObject._id === undefined) {
          this.router.navigate(['/']); // if the session id is invalid, navigate to home
        } else {
          this.sessionId = sessionObject._id;
          this.text = sessionObject.content;
          this.initIOConnection();
        }
      });
    } else {
      const sessionObj: any = {
        // 'createdBy': 'ctapal',
        'createdDate': new Date(),
        'content': this.text
      };
      this.sessionService.createSession(sessionObj).subscribe(sessionObject => {
        if (sessionObject == null || sessionObject._id == null || sessionObject._id === undefined) {
          this.router.navigate(['/']); // if the session id is invalid, navigate to home
        } else {
          this.router.navigate(['/codeshare/' + sessionObject._id]); // if the session id is invalid, navigate to home
        }
      });
    }
  }
  private initIOConnection = (): void => {
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onContent()
      .subscribe((data: any) => {
        console.log('Message from server : ' + data);
        this.text = data;
      });
    this.socketService.onEvent('connect')
      .subscribe(() => {
        console.log('Session Id is : ' + this.sessionId);
        this.socketService.session(this.sessionId); // emit a session id that is unique for a meeting
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

  onChange = (content) => {
    console.log('new code', content);
    if (!content) {
      return;
    }
    this.socketService.send(content);
  }
}
