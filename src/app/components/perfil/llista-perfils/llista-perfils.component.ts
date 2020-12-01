import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-llista-perfils',
  templateUrl: './llista-perfils.component.html',
  styleUrls: ['./llista-perfils.component.css']
})
export class LlistaPerfilsComponent implements OnInit {

  usuarios: User[] = [];

  constructor() {

    this.usuarios.push(new User('Quim','Martínez',20,'assets/img/1.jpg','Programador Fullstack', 'quiim2000@gmail.com', 'qmartinez'));
    this.usuarios.push(new User('Victor','Barbé',21,'assets/img/2.jpg','Programador Frontend', 'victorbg202@gmail.com', 'vbarbe'));
    this.usuarios.push(new User('Marc','Batalla',22,'assets/img/3.jpg','Programador Backend', 'marcbatalla@gmail.com', 'mbatalla'));
  }

  ngOnInit(): void {



  }

}
