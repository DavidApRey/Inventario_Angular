import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { InventarioComponent } from './inventario.component';
import { CrearComponent } from './crear/crear.component';

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
    FormsModule,
    CommonModule,
  ],
  providers: [],
})
export class InventarioModule { }
