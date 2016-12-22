import { Injectable } from '@angular/core';
export class Producto{
  id: number;
  codigo: string;
  nombre: string;
  precio: number;    
  constructor(id:number, codigo: string, nombre:string, precio:number) {
    this.id=id;
    this.codigo=codigo;
    this.nombre=nombre;
    this.precio=precio;
   }   
}

@Injectable()
export class ProductoService {

  constructor() { }
  public getAll(){
    return[
      new Producto(1,'CafeAndati','Cafe Andati Grande',14.50),
      new Producto(2,'CocaCola','Coca Cola 2L',14.50),
      new Producto(3,'CafeAndati','Cafe Andati Grande',14.50)
    ];
  }
}
