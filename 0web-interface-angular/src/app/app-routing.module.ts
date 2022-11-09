import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
                        { path: 'home', loadChildren: () => import('./standalone-components/home/home.module').then(m => m.HomeModule) },
                        { path: 'account', loadChildren: () => import('./standalone-components/account/account.module').then(m => m.AccountModule) },
                        { path: 'login', loadChildren: () => import('./standalone-components/login/login.module').then(m => m.LoginModule) },
                        { path: 'register', loadChildren: () => import('./standalone-components/register/register.module').then(m => m.RegisterModule) },
                        { path: 'dashboard', loadChildren: () => import('./standalone-components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                        { path: '**', loadChildren: () => import('./standalone-components/error/error.module').then(m => m.ErrorModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
