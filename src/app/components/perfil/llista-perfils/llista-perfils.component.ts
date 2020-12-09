import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-llista-perfils',
  templateUrl: './llista-perfils.component.html',
  styleUrls: ['./llista-perfils.component.css']
})
export class LlistaPerfilsComponent implements OnInit {

  @Input() usuarios: User[];
  @Input() usuario: User;
  @Output() informarEvent = new EventEmitter<User>();


  constructor() { }

  ngOnInit(): void {

  }

  //Output de EventEmitter per enviar usuari al pare
  informarUser(event) {
    this.informarEvent.emit(event);
  }

}
