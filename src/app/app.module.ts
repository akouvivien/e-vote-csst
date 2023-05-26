import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/Authentification/login/login.component';
import { RegisterComponent } from './components/Authentification/register/register.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { VoteComponent } from './components/pages/vote/vote.component';
import { RemerciementsComponent } from './components/pages/remerciements/remerciements.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ThankYouPageComponent } from './components/pages/thank-you-page/thank-you-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ElectionResultComponent } from './components/pages/election-result/election-result.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
