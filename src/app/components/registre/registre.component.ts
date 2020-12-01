import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  errLloc: string = "";
  errNom: string = "";
  errApellido = "";
  errEdat = "";
  errFoto = "";
  errDesc = "";
  errCont = "";
  errEmail = ['^[^@]+@[^@]+\.[a-zA-Z]{2,}$'];
  errText: string = "";
  mostrarInfo: string = "";
  errCheck?;

  enviarDatos(nom, cognom, edat, foto, desc, email, cont, confCont) {

    //Comp nombre
    if(nom == ""){
      this.errNom = "Nom incorrecte introdueix un nom";
    }else {
      this.errNom = "Nom correct";
    }

    //Comp Apellidos
    if(cognom == ""){
      this.errApellido = "Cognom incorrecte introdueix un lloc";
    }else {
      this.errApellido = "Cognom correct";
    }

    //Comp Foto
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
    if(email.match(this.errEmail)){
      this.mostrarInfo = "Email correcto";
    }else{
      this.mostrarInfo = "Email incorrecto";
    }

    //Comp Cont
    if((cont == "" || confCont == "") && (cont != confCont)){
      this.errCont = "Contrasenya incorrecte introdueix una foto";
    }else {
      this.errCont = "Contrasenya correcta";
    }


    /*if (this.errCheck = document.getElementById("Check")/*.checked/ && nom != "" &&  lloc!="" && email.match(this.errEmail)  && text.length > 2) {
      this.errCheck = "";
      //this.carta.push(new GrupEvents(nom, lloc, url , text, email));
    }else {
      this.errCheck = "Acepar condicions";
    }*/
  }

}
