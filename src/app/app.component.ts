import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-root',
  /*template: `
     <h1>{{ title }}</h1>
     <h2>{{ name }}</h2>
     <div *ngIf="1==1">
       <p>OCULTAR</p>
  `,*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
//Propiedades:
  public title: string = 'app works!';
  private body: string = '';
  person: Person;
  private show: boolean;
  private btnTitle: string;
  private items: string[];
  private itemSeleccionado: number;
  public estilo: any;
  public color: string;

// Constructor:

  constructor(){
  	this.body = 'body';
    this.show = true;
    this.btnTitle = 'Mostrar';
    this.items = [];
    this.items.push('Item 1');
    this.items.push('Item 2');
    this.items.push('Item 3');
    this.items.push('Item 4');
    this.itemSeleccionado = 0;
    this.color = 'red';
  }

// Métodos:

  ngOnInit(): void{
  	console.log('ngOnInit');
  }

  ngOnChanges(vars: SimpleChanges){
  	console.log(vars);
  }

  private getItems(){
  	console.log('getItems();');
  	alert('HOLA');
  }

  onShow(){
    this.show = !this.show;
    if(!this.show) {
      this.btnTitle = 'Ocultar';
    }  else{
      this.btnTitle = 'Mostrar';
    }
  }

  agregaItems(){
    this.items.push('Item '+(this.items.length+1));
  }

  quitarItem(index: number){
    //Método splice, parametros: (posicion en arreglo) y (cantidad de elementos)
    this.items.splice(index,1);
  }

  seleccionarItem(index: number){
    this.itemSeleccionado = index;
  }

  cssPar(index: number):boolean {
    return index%2 === 0;
  }

  ponerEstilo(index: number): any {
    return {'par': this.cssPar(index), 'impar': !this.cssPar(index)};
  }

}
