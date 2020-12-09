import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LlistaPerfilsComponent } from './components/perfil/llista-perfils/llista-perfils.component';
import { DetallsPerfilComponent } from './components/perfil/detalls-perfil/detalls-perfil.component';
import { RegistreComponent } from './components/registre/registre.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { LlistaUsuarisComponent } from './components/administrador/llista-usuaris/llista-usuaris.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ElementLlistaPerfilComponent } from './components/perfil/element-llista-perfil/element-llista-perfil.component';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    LlistaPerfilsComponent,
    DetallsPerfilComponent,
    RegistreComponent,
    AdministradorComponent,
    LlistaUsuarisComponent,
    FooterComponent,
    NavbarComponent,
    ElementLlistaPerfilComponent,
    Error404Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
