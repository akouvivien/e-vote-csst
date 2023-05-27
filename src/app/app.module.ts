import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent

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
