import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeshareComponent } from './codeshare.component';
import { SocketioService } from './shared/socketio.service';
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AceEditorModule
  ],
  declarations: [CodeshareComponent],
  providers: [SocketioService]
})
export class CodeshareModule { }
