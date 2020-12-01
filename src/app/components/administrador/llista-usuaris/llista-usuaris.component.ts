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
  private desc:string ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";
  private rut_img:string ="../../../../assets/img/icono_user.png";

  constructor() { }

  ngOnInit(): void {
    this.listaUsers.push(new UserListAdmin(
      Math.round(Math.random()*100),
      'Marc',
      'Batalla',
      22,
      this.rut_img,
      this.desc,
      'marcbatalla@gmail.com')
    );
    this.listaUsers.push(new UserListAdmin(
      Math.round(Math.random()*100),
      'Victor',
      'Barbe',
      21,
      this.rut_img,
      this.desc,
      'victorbarbe@gmail.com')
      );
    this.listaUsers.push(new UserListAdmin(Math.round(
      Math.random()*100),
      'Quim',
      'Martinez',
      20,
      this.rut_img,
      this.desc,
      'quimmartinez@gmail.com')
      );
    this.listaUsers.push(new UserListAdmin(Math.round(
      Math.random()*100),
      'Valenti',
      'Casas',
      30,
      this.rut_img,
      this.desc,
      'vcasas@ilerna.com')
      );
    this.listaUsers.push(new UserListAdmin(
      Math.round(Math.random()*100),
      'Nelson',
      'Perez',
      30,
      this.rut_img,
      this.desc,
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
