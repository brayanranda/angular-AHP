import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterDeciderComponent } from './components/register-decider/register-decider.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component:LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: 'contact'},
  {path: 'contact', component:ContactComponent},
  {path: '', pathMatch: 'full', redirectTo: 'register'},
  {path: 'register', component:RegisterComponent},
  {path: '', pathMatch: 'full', redirectTo: 'register-decider'},
  {path: 'register-decider', component:RegisterDeciderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
