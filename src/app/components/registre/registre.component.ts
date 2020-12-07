import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})

export class RegistreComponent {

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
      //push array
    }
}


