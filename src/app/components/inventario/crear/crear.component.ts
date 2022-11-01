import { Component } from '@angular/core';
import { articulo, crear_arti } from '../../interfaces/inventario.interfaces';
import { InventarioService } from '../../services/inventario.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  crear_articulos: FormGroup;

  constructor (
    private InventarioService: InventarioService,
    private fb: FormBuilder ){
      this.crear_articulos = this.fb.group({
        descripcion: ['', Validators.required],
        precio: ['', Validators.required],
        stock: ['', Validators.required]
      });
    }

  onSubmit(){

    console.log("desc"+this.crear_articulos.value.descripcion);
    console.log("precio"+this.crear_articulos.value.precio);
    console.log("stock"+this.crear_articulos.value.stock);
  }

}
