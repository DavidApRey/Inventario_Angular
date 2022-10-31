import { Injectable } from '@angular/core';
import { articulo } from '../interfaces/inventario.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private _articulos: articulo[] = [
    {
      id_articulo: 24,
      descripcion: 'Datos',
      precio: 500,
      stock: 25,
      id_tipo: 2
    },
    {
      id_articulo: 25,
      descripcion: 'Datos2',
      precio: 550,
      stock: 30,
      id_tipo: 3
    }];

  private url = "http://localhost/rest_api_php/Inventario";

  get articulos() {
    return [...this._articulos];
  }

  crearArticulos( articulo: articulo ) {
    this._articulos.unshift(articulo);
    console.log(this._articulos);
  }

  eliminarArticulos( id: number ){
    this._articulos
  }

}
