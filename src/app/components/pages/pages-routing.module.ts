import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../Authentification/login/login.component';
import { ElectionResultComponent } from './election-result/election-result.component';
import { VoteComponent } from './vote/vote.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarteElecteurComponent } from './carte-electeur/carte-electeur.component';
import { HomeComponent } from './home/home.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';


const routes: Routes = [
  { path: '',component:DashboardComponent, children:[
    { path: '', component: HomeComponent }, 
    { path: 'vote', component: VoteComponent },
    { path: 'merci', component: ThankYouPageComponent },  
    { path: 'resultat', component: ElectionResultComponent },
    { path: 'carte', component:CarteElecteurComponent},
    { path: 'home', component:HomeComponent}

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
