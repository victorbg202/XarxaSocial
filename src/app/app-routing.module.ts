import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistreComponent } from './components/registre/registre.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "inici"},
  { path: 'registro' , component: RegistreComponent },
  {path: "**" ,redirectTo: "inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
