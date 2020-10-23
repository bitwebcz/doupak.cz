// AppRoutingModule is top-level module that is dedicated to routing and imported by the root AppModule.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // default route redirect
  { path: 'dashboard', component: DashboardComponent },
  {
      path: 'heroes',              // A string that matches the URL in the browser address bar.
      component: HeroesComponent   // The component that the router should create when navigating to this route.
  },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  // Add the RouterModule to the AppRoutingModule import array and configure it with the routes in one step by calling RouterModule.forRoot():
  imports: [RouterModule.forRoot(routes)],
  // AppRoutingModule exports RouterModule so it will be available throughout the app.
  exports: [RouterModule]
})
export class AppRoutingModule { }
