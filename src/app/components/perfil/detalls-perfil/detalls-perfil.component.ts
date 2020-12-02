import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-detalls-perfil',
  templateUrl: './detalls-perfil.component.html',
  styleUrls: ['./detalls-perfil.component.css']
})
export class DetallsPerfilComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
    this.user = new User('','',0,'','','','');

  }





}
