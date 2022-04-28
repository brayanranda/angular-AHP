import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QualifyComponent } from './components/qualify/qualify.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterDeciderComponent } from './components/register-decider/register-decider.component';
import { ChartComponent } from './components/chart/chart.component';
import { ProblemComponent } from './components/problem/problem.component';
import { ListProblemComponent } from './components/list-problem/list-problem.component';
import { HomeComponent } from './components/home/home.component';
import { ListDeciderComponent } from './components/list-decider/list-decider.component';
import { RegisterProblemComponent } from './components/register-problem/register-problem.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { PasswordComponent } from './components/password/password.component';
import { EditProblemComponent } from './components/edit-problem/edit-problem.component';
import { EditDeciderComponent } from './components/edit-decider/edit-decider.component';
import { RegisterCriterionComponent } from './components/register-criterion/register-criterion.component';
import { RegisterAlternativeComponent } from './components/register-alternative/register-alternative.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { AccessGuard } from './guards/AccessGuard';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: ''},
  {path: '', component: LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'login/confirmation/:idConfirmation', component:ConfirmationComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'register-decider', component:RegisterDeciderComponent,data:{requiresLogin: true},canActivate: [ AccessGuard]},
  {path: 'chart', component:ChartComponent,data:{requiresLogin: true},canActivate: [ AccessGuard]},
  {path: 'problem', component:ProblemComponent,data:{requiresLogin: true},canActivate: [ AccessGuard]},
  {path: 'list-decider', component:ListDeciderComponent,data:{requiresLogin: true},canActivate: [ AccessGuard]},
  {path: 'register-problem', component:RegisterProblemComponent,data:{requiresLogin: true},canActivate: [ AccessGuard]},
  {path: 'list-problem', component:ListProblemComponent,data:{requiresLogin: true},canActivate: [ AccessGuard]},
  {path: 'password-reset', component:PasswordResetComponent},
  {path: 'password-reset/confirmation/:idConfirmation', component:PasswordComponent},
  {path: 'register-criterion', component:RegisterCriterionComponent,data:{requiresLogin: true},canActivate: [ AccessGuard]},
  {path: 'register-alternative', component:RegisterAlternativeComponent,data:{requiresLogin: true},canActivate: [ AccessGuard]},
  {path: 'edit-decider', component:EditDeciderComponent,data:{requiresLogin: true},canActivate: [ AccessGuard]},
  {path: 'edit-user', component:EditUserComponent,data:{requiresLogin: true},canActivate: [ AccessGuard]},
  {path: 'qualify', component:QualifyComponent},
  {path: 'my-account', component:MyaccountComponent,data:{requiresLogin: true},canActivate: [ AccessGuard]},

  // {path: 'edit-problem', component:EditProblemComponent},
  {path:"edit-problem/:idProblema", component:RegisterProblemComponent,data:{requiresLogin: true},canActivate: [ AccessGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
