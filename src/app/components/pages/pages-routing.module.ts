import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../Authentification/login/login.component';
import { ElectionResultComponent } from './election-result/election-result.component';
import { VoteComponent } from './vote/vote.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '',component:DashboardComponent, children:[
    { path: '', component: VoteComponent }, 
    { path: 'vote', component: VoteComponent },  
    { path: 'resultat', component: ElectionResultComponent }

  ] },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  exports :[RouterModule]

})
export class PagesRoutingModule { }
