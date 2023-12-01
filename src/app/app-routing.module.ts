import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScaffaliComponent } from './scaffali/scaffali.component';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'scaffali', component: ScaffaliComponent },
  { path: 'book/:id', component: BookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
