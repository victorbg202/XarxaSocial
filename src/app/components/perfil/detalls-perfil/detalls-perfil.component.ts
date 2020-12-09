import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-detalls-perfil',
  templateUrl: './detalls-perfil.component.html',
  styleUrls: ['./detalls-perfil.component.css']
})
export class DetallsPerfilComponent {

  @Input() user: User;

  constructor() { }

}
