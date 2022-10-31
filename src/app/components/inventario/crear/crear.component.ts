import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Locales } from './local';
import { articulo, crear_arti } from '../../interfaces/inventario.interfaces';
import { InventarioService } from '../../services/inventario.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {


  constructor (private InventarioService: InventarioService){



  }



  crear_articulo(articulo: NgForm){

    console.log(articulo);
    console.log(this.InventarioService.articulos);

  }




}
