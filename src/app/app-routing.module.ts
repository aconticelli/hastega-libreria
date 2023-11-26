import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScaffaliComponent } from './scaffali/scaffali.component';
import { LibroComponent } from './libro/libro.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'scaffali', component: ScaffaliComponent },
  { path: 'libro/:id', component: LibroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
