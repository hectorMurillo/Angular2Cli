import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { ProductosListadoComponent } from './productos-listado/productos-listado.component';
import { ProductosFormularioComponent } from './productos-formulario/productos-formulario.component';
import { productosRouting } from './productos-routes';
import { ProductoService } from './producto.service';
@NgModule({
  imports: [
    CommonModule,
    productosRouting
  ],
  providers:[
    ProductoService
  ],
  declarations: [
  ProductosComponent, 
  ProductosListadoComponent, 
  ProductosFormularioComponent
  ]
})
export class ProductosModule { }
