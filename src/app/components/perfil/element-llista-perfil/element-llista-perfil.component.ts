import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-element-llista-perfil',
  templateUrl: './element-llista-perfil.component.html',
  styleUrls: ['./element-llista-perfil.component.css']
})
export class ElementLlistaPerfilComponent implements OnInit {

  @Input() user: User;
  @Output() selectEvent = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  //Ouput EventEmitter per enviar informació del usuari al component pare
  userSelected() {
    this.selectEvent.emit(this.user);
  }

}
