import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeshareComponent } from './codeshare/codeshare.component';

const routes: Routes = [
  {
    path: '', component: CodeshareComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
