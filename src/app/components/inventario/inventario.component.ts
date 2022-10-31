import { Component } from '@angular/core';
import { articulo } from '../interfaces/inventario.interfaces';
import { InventarioService } from '../services/inventario.service';
import {NgForm} from '@angular/forms';

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




}
