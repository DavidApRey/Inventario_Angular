import { Component } from '@angular/core';
import { articulo, crear_arti, tipo_articulo } from '../../interfaces/inventario.interfaces';
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
    private fb: FormBuilder )
    {

      this.crear_articulos = this.fb.group({
        id_articulo: ['', Validators.required],
        descripcion: ['', Validators.required],
        precio: ['', Validators.required],
        stock: ['', Validators.required],
        id_tipo: ['', Validators.required]
    });
    }

  onSubmit(){



  }

}
