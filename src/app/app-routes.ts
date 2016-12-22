import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TdFormComponent } from './td-form/td-form.component';
import { MdformComponent } from './mdform/mdform.component';
import { CanActivateAuth } from './can-activate-auth'
const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'tdf', component: TdFormComponent },
  { path: 'mdf', component: MdformComponent },
  { path: 'productos', loadChildren: 'app/productos/productos.module#ProductosModule', 
  canActivate:[CanActivateAuth]},
  { path: '**', redirectTo: 'welcome' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);