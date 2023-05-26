import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

const routes: Routes = [

  {
    path:'authentification',
    loadChildren: () => import('./components/Authentification/authentification.module').then(m=>m.AuthentificationModule)
  },

  {
    path:'dashboard',
    loadChildren: () => import('./components/pages/pages.module').then(m=>m.PagesModule),

  },

  {
    path:'',
    redirectTo:'authentification',
    pathMatch: 'full'
  },

  { path:'**',component:NotFoundComponent }


];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
