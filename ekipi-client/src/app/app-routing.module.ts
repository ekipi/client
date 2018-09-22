import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeshareComponent } from './codeshare/codeshare.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'codeshare', component: CodeshareComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
