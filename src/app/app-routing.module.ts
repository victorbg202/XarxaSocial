import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { RegistreComponent } from './components/registre/registre.component';
import { DetallsPerfilComponent } from './components/perfil/detalls-perfil/detalls-perfil.component';
import { LlistaPerfilsComponent } from './components/perfil/llista-perfils/llista-perfils.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "perfil"},
  { path: 'registro' , component: RegistreComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'detalls-perfil', component: DetallsPerfilComponent },
  { path: 'llista-perfils', component: LlistaPerfilsComponent },
  { path: 'admin', component: AdministradorComponent},
  { path: 'error404', component: Error404Component},
  { path: "**" ,redirectTo: "error404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
