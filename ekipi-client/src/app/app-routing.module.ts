import { ContactUsComponent } from './core/contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeshareComponent } from './codeshare/codeshare.component';
import { HomepageComponent } from './core/homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'codeshare', component: CodeshareComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'codeshare/:sessionId', component: CodeshareComponent },
  { path: 'home', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
