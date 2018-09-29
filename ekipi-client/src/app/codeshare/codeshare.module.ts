import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeshareComponent } from './codeshare.component';
import { SocketioService } from '../shared/socket/socketio.service';
import { AceEditorModule } from 'ng2-ace-editor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AceEditorModule,
    HttpClientModule
  ],
  declarations: [CodeshareComponent],
  providers: [SocketioService]
})
export class CodeshareModule { }
