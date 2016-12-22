import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosListadoComponent} from './productos-listado/productos-listado.component';
import { ProductosFormularioComponent} from './productos-formulario/productos-formulario.component';

const routes: Routes = [
  { path: '', component: ProductosListadoComponent },
  { path: ':id', component: ProductosFormularioComponent }
];

export const productosRouting: ModuleWithProviders = RouterModule.forChild(routes);