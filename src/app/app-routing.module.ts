import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo:"inici"},
  {path: 'admin', component: AdministradorComponent},
  {path: "**" , redirectTo:"inici"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
