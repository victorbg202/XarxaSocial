import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-llista-perfils',
  templateUrl: './llista-perfils.component.html',
  styleUrls: ['./llista-perfils.component.css']
})
export class LlistaPerfilsComponent implements OnInit {

  usuarios: User[] = [];

  @Input() usuario: User;
  @Output() informarEvent = new EventEmitter<User>();

  constructor() {

    this.usuarios.push(new User('Quim','Martínez',20,'assets/img/avatar1.png','Programador Fullstack', 'quiim2000@gmail.com', 'qmartinez'));
    this.usuarios.push(new User('Victor','Barbé',21,'assets/img/avatar2.png','Programador Frontend', 'victorbg202@gmail.com', 'vbarbe'));
    this.usuarios.push(new User('Marc','Batalla',22,'assets/img/avatar3.png','Programador Backend', 'marcbatalla@gmail.com', 'mbatalla'));
    console.log(this.usuarios);
  }

  ngOnInit(): void {

  }


  informarUser(event) {
    this.informarEvent.emit(event);
  }

}
