import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './components/inventario/inventario.component';
import { CrearComponent } from './components/inventario/crear/crear.component';

const routes: Routes = [
  { path: '', component: InventarioComponent },
  { path: 'Crear', component: CrearComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
