import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tituloForm = 'Iniciar sesión';
  textoBoton = 'Enviar';
  login = true;

  constructor() { }

  ngOnInit() {}

  changeForm() {
    this.login = !this.login;
    if (this.login) {
      this.tituloForm = 'Iniciar sesión';
      this.textoBoton = 'Enviar';
    } else {
      this.tituloForm = 'Crear usuario';
      this.textoBoton = 'Añadir';
    }
  }

}
