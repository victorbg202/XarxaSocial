import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { User } from 'src/app/models/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})

export class RegistreComponent {

    usuarios: User = null;
    @Output() informarEvent = new EventEmitter<User>();

    registre = new FormGroup({
      nom: new FormControl('', Validators.required),
      cognom: new FormControl('', Validators.required),
      edat: new FormControl('', Validators.required),
      foto: new FormControl('', Validators.required),
      desc: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cont: new FormControl('', Validators.required),
      confCont: new FormControl('', [Validators.required, RxwebValidators.compare({fieldName:'cont'})])
    });

    sweetAlert() {
      Swal.fire({
        icon: 'success',
        text: 'Usuari registrat!',
      })
    }

    push() {
      this.usuarios = new User(
        this.registre.get('nom').value,
        this.registre.get('cognom').value,
        this.registre.get('edat').value,
        this.registre.get('foto').value,
        this.registre.get('desc').value,
        this.registre.get('email').value,
        this.registre.get('cont').value
      );
      this.informarEvent.emit(this.usuarios);
    }

}


