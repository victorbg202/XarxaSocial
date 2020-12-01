import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallsPerfilComponent } from './components/perfil/detalls-perfil/detalls-perfil.component';
import { LlistaPerfilsComponent } from './components/perfil/llista-perfils/llista-perfils.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'detalls-perfil', component: DetallsPerfilComponent },
  { path: 'llista-perfils', component: LlistaPerfilsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
