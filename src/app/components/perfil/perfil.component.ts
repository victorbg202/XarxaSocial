import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  userSelected: User = null;

  constructor() { }

  ngOnInit(): void {
  }

  changeUserSelected(user) {
    this.userSelected = user;
  }

}
