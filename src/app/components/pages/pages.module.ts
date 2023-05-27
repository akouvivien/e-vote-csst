import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElectionResultComponent } from './election-result/election-result.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RemerciementsComponent } from './remerciements/remerciements.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { VoteComponent } from './vote/vote.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CarteElecteurComponent } from './carte-electeur/carte-electeur.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    DashboardComponent,
    VoteComponent,
    RemerciementsComponent,
    NotFoundComponent,
    ThankYouPageComponent,
    ElectionResultComponent,
    CarteElecteurComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
