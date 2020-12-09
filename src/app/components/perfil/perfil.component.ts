import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuarios: User[] = [];
  mostrar = false;
  userSelected: User = null;

  constructor() {
    // Inicialitzar array amb 3 usuaris
    this.usuarios.push(new User('Quim','Martínez',20,'assets/img/avatar1.png','Programador Fullstack', 'quiim2000@gmail.com', 'qmartinez'));
    this.usuarios.push(new User('Victor','Barbé',21,'assets/img/avatar2.png','Programador Frontend', 'victorbg202@gmail.com', 'vbarbe'));
    this.usuarios.push(new User('Marc','Batalla',22,'assets/img/avatar3.png','Programador Backend', 'marcbatalla@gmail.com', 'mbatalla'));

    console.log(this.usuarios);
  }

  ngOnInit(): void {
  }

  //Cambiar usuari seleccionat i que es mostri
  changeUserSelected(user) {
    this.userSelected = user;
    console.log(this.userSelected);
  }

  //Mostrar Formulari amb ngif
  mostrarForm() {
    this.mostrar = true;
  }

  //Afegir nou usuari
  addFormUser(user){
    this.usuarios.push(user);
    console.log(this.userSelected);
  }

}
