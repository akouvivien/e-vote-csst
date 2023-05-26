import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthentificationRoutingModule } from './authentification-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
   
  ]
})
export class AuthentificationModule { }
