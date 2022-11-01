import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { InventarioComponent } from './inventario.component';
import { CrearComponent } from './crear/crear.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditarComponent,
    EliminarComponent,
    InventarioComponent,
    CrearComponent
  ],
  exports: [
    EditarComponent,
    EliminarComponent,
    InventarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class InventarioModule { }
