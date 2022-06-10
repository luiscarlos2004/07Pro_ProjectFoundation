import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/shared/error-page/error-page.component';

import { AuthGuard } from './components/auth/auth/guards/auth.guard';
const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./components/auth/login-module.module').then(m => m.LoginModuleModule),
  },
  {
    path:'pagina',
    loadChildren: () => import('./components/PaginaPrincipal/module-principal.module').then(m=>m.ModulePrincipalModule),
    // canLoad: [ AuthGuard ]
  },
  {
    path:'admin',
    loadChildren: () => import('./components/admin/admin-module.module').then(m => m.AdminModuleModule),
    // canLoad: [ AuthGuard ]
  },
  {
    path:'404',
    component: ErrorPageComponent
  },
  {
    path:'**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
