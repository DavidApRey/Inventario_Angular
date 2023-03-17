import { Injectable } from '@angular/core';
import { articulo } from '../interfaces/inventario.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private _articulos: articulo[] = [
    {
      id_articulo: '24',
      descripcion: 'Datos',
      precio: 500,
      stock: 25,
      id_tipo: 2
    },
    {
      id_articulo: '25',
      descripcion: 'Datos2',
      precio: 550,
      stock: 30,
      id_tipo: 3
    }];

  id_auto() {
    const maxValue: any = Math.max(...this._articulos.map(x => parseInt(x.id_articulo)));
    const valor = this._articulos.filter(item => item.id_articulo == maxValue);
    const valor_id = valor[0].id_articulo;
    const dato = parseInt(valor_id);
    return dato + 1;
  }

  private url = "http://localhost/rest_api_php/Inventario";

  get articulos() {
    return [...this._articulos];
  }

  crearArticulos(articulo: articulo) {
    this._articulos.unshift(articulo);
    console.log(this._articulos);
  }

}
