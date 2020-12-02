import { Component, OnInit } from '@angular/core';
import { UserListAdmin } from 'src/app/models/lista-admin-users.model';

@Component({
  selector: 'app-llista-usuaris',
  templateUrl: './llista-usuaris.component.html',
  styleUrls: ['./llista-usuaris.component.css']
})
export class LlistaUsuarisComponent implements OnInit {

  users_admin: UserListAdmin = null;
  listaUsers: UserListAdmin[] = [];
 
  constructor() { }

  ngOnInit(): void {
    this.listaUsers.push(new UserListAdmin(
      Math.round(Math.random()*100),
      'Marc',
      'Batalla',
      'marcbatalla@gmail.com')
    );
    this.listaUsers.push(new UserListAdmin(
      Math.round(Math.random()*100),
      'Victor',
      'Barbe',
      'victorbarbe@gmail.com')
      );
    this.listaUsers.push(new UserListAdmin(Math.round(
      Math.random()*100),
      'Quim',
      'Martinez',
      'quimmartinez@gmail.com')
      );
    this.listaUsers.push(new UserListAdmin(Math.round(
      Math.random()*100),
      'Valenti',
      'Casas',
      'vcasas@ilerna.com')
      );
    this.listaUsers.push(new UserListAdmin(
      Math.round(Math.random()*100),
      'Nelson',
      'Perez',
      'nperez@ilerna.com')
      );
  }

  borrar(id){
    console.log(id);
    for (let index = 0; index < this.listaUsers.length; index++) {
      if (this.listaUsers[index].id_user == id) {
        this.listaUsers.splice(index, 1);
      }
    }
  }

}
