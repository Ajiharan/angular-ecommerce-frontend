import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppPageNotFoundComponent } from './app-page-not-found/app-page-not-found.component';
import { AppRegisterComponent } from './app-register/app-register.component';

const routes: Routes = [
  {
    path: '',
    component: AppLoginComponent,
  },
  {
    path: 'register',
    component: AppRegisterComponent,
  },
  {
    path: 'home',
    component: AppHomeComponent,
  },

  {
    path: '**',
    component: AppPageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
