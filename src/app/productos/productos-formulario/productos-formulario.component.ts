import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productos-formulario',
  templateUrl: './productos-formulario.component.html',
  styleUrls: ['./productos-formulario.component.css']
})
export class ProductosFormularioComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
  	let id: number = this._route.snapshot.params['id'];

  	// Opción más recomendada:
  	//this._route.params.map(params => params['id']);
  	console.log('Parametro de ruta =>', id);
  }

}
