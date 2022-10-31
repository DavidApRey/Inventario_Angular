import { Component } from '@angular/core';
import { articulo } from '../interfaces/inventario.interfaces';
import { InventarioService } from '../services/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  constructor(private Inventarioservice: InventarioService) { }

  get articulos() {
    return this.Inventarioservice.articulos;
  }

  articulo_new: articulo = {
    id_articulo: 25,
    descripcion: 'Datos2',
    precio: 550,
    stock: 30,
    id_tipo: 3
  };

  crear(){
    // this.Inventarioservice.crearArticulos();
  }

}
