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
  errEmail = ['^[^@]+@[^@]+\.[a-zA-Z]{2,}$'];
  errText: string = "";
  mostrarInfo: string = "";
  errCheck?;

  enviarDatos(nom, cognom, url, text, email, descripcio) {

    //Comp nombre
    if(nom == ""){
      this.errNom = "Nom incorrecte introdueix un nom";
    }else {
      this.errNom = "Nom correct";
    }

    //Comp Apellidos
    if(cognom == ""){
      this.errLloc = "Cognom incorrecte introdueix un lloc";
    }else {
      this.errLloc = "Lloc correct";
    }

    //Comp email
    if(email.match(this.errEmail)){
      this.mostrarInfo = "Email correcto";
    }else{
      this.mostrarInfo = "Email incorrecto";
    }

    //
    if(descripcio == ""){
      this.errLloc = "Descripcio incorrecte introdueix una descripcio";
    }else {
      if(text.length < 2){
        this.errText = "El text es molt curt";
      }else {
        this.errText = "Text correcte";
      }
    }

    if (this.errCheck = document.getElementById("Check")/*.checked*/ && nom != "" &&  lloc!="" && email.match(this.errEmail)  && text.length > 2) {
      this.errCheck = "";
      //this.carta.push(new GrupEvents(nom, lloc, url , text, email));
    }else {
      this.errCheck = "Acepar condicions";
    }
  }

}
