import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropalComponent } from './pages/propal/propal.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [

  {
    path: '',
    component: LandingComponent
  },
  {
      path: 'propals',
      component: PropalComponent
  },
  {
      path: '**',
      redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
