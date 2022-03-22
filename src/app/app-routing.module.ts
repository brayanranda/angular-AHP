import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterDeciderComponent } from './components/register-decider/register-decider.component';
import { ChartComponent } from './components/chart/chart.component';
import { ProblemComponent } from './components/problem/problem.component';
import { ListProblemComponent } from './components/list-problem/list-problem.component';
import { HomeComponent } from './components/home/home.component';
import { ListDeciderComponent } from './components/list-decider/list-decider.component';
import { RegisterProblemComponent } from './components/register-problem/register-problem.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},
  {path: '', component:HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component:LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: 'contact'},
  {path: 'contact', component:ContactComponent},
  {path: '', pathMatch: 'full', redirectTo: 'register'},
  {path: 'register', component:RegisterComponent},
  {path: '', pathMatch: 'full', redirectTo: 'register-decider'},
  {path: 'register-decider', component:RegisterDeciderComponent},
  {path: '', pathMatch: 'full', redirectTo: 'chart'},
  {path: 'chart', component:ChartComponent},
  {path: '', pathMatch: 'full', redirectTo: 'problem'},
  {path: 'problem', component:ProblemComponent},
  {path: '', pathMatch: 'full', redirectTo: 'list-decider'},
  {path: 'list-decider', component:ListDeciderComponent},
  {path: '', pathMatch: 'full', redirectTo: 'register-problem'},
  {path: 'register-problem', component:RegisterProblemComponent},
  {path: '', pathMatch: 'full', redirectTo: 'list-problem'},
  {path: 'list-problem', component:ListProblemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
