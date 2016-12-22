import { Component, OnInit } from '@angular/core';
import { ProductoService, Producto} from "../producto.service";

@Component({
  selector: 'app-productos-listado',
  templateUrl: './productos-listado.component.html',
  styleUrls: ['./productos-listado.component.css']
})
export class ProductosListadoComponent implements OnInit {
  productos: Producto[];
  constructor(private productoServ: ProductoService) { }

  ngOnInit() {
    this.productos=this.productoServ.getAll();
  }

}
