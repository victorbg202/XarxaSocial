import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})

export class RegistreComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //
  errLloc: string = "";
  errNom: string = "";
  errApellido = "";
  errEdat = "";
  errFoto = "";
  errDesc = "";
  errCont = "";
  errEmail = "";
  compEmail = ['^[^@]+@[^@]+\.[a-zA-Z]{2,}$'];
  errText: string = "";
  mostrarInfo: string = "";
  errCheck?;

  //Recibir y comprobar datos
  enviarDatos(nom, cognom, edat, foto, desc, email, cont, confCont) {

    //Comp nombre
    if(nom == ""){
      this.errNom = "Nom incorrecte introdueix un nom";
    }else {
      this.errNom = "Nom correcte";
    }

    //Comp Apellidos
    if(cognom == ""){
      this.errApellido = "Cognom incorrecte introdueix un lloc";
    }else {
      this.errApellido = "Cognom correct";
    }

    //Comp Edat
    if(edat == ""){
      this.errEdat = "Edat incorrecte introdueix una edat";
    }else {
      this.errEdat = "Edat correcta";
    }

    //Comp Foto
    if(foto == ""){
      this.errFoto = "Foto incorrecte introdueix una foto";
    }else {
      this.errFoto = "Foto correcta";
    }

    //Comp desc
    if(desc == ""){
      this.errDesc = "Descripcio incorrecte introdueix una descripcio";
    }else {
      if(desc.length < 4){
        this.errText = "El text es molt curt";
      }else {
        this.errText = "Text correcte";
      }
    }

    //Comp email
    if(email != "" && email.match(this.compEmail)){
      this.errEmail = "Email correcte";
    }else{
      this.errEmail = "Email incorrecte";
    }

    //Comp Cont
    if(cont != "" && (cont=confCont)) {
      this.errCont = "Contrasenya correcta";
    }else {
      this.errCont = "Contrasenya incorrecta";
    }

    //Push y feedback
    if (email.match(this.compEmail) && (cont=confCont) && nom != "" &&  cognom!="" && edat!="" && foto!="" && email!="" && desc.length > 4 && cont!="") {
      //Guardar usuario
      //this.??.push(new ??(nom, cognom, edat, foto, desc, email, cont));

      //Mensaje OK
      Swal.fire({
        icon: 'success',
        text: 'Registrat!'
      })
    }else {
      //Mensaje de error
      Swal.fire({
        icon: 'error',
        text: 'Alguna cosa ha anat malament!'
      })
    }
  }

}
