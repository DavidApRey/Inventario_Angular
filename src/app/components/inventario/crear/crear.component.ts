import { Component } from '@angular/core';
import { InventarioService } from '../../services/inventario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  crear_articulos: FormGroup;
  disableTextbox =  false;

  constructor(
    private InventarioService: InventarioService,
    private fb: FormBuilder) {
    this.crear_articulos = this.fb.group({
      id_articulo: [{value: this.id_maximo, disabled: true}, Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
      id_tipo: ['', Validators.required]
    });
  }

  get id_maximo(){
    return this.InventarioService.id_auto();
  }

  onSubmit() {
    this.InventarioService.crearArticulos(this.crear_articulos.value);
  }

}
