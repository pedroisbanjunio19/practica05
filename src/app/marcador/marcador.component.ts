import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  locales: any[] = [
    {nombre: 'Isaiah Thomas', puntos: 0, imagen: 'assets/img/thomas.png'},
    {nombre: 'Kyle Kuzma', puntos: 0, imagen: 'assets/img/kuzma.png'},
    {nombre: 'Julius Randle', puntos: 0, imagen: 'assets/img/randle.png'},
    {nombre: 'Brandom Ingram', puntos: 0, imagen: 'assets/img/ingram.png'},
    {nombre: 'Brook López', puntos: 0, imagen: 'assets/img/lopez.png'},
  ];
  visitantes: any[] = [
    {nombre: 'Kaadem Allen', puntos: 0, imagen: 'assets/img/allen.png'},
    {nombre: 'Aron Bynes', puntos: 0, imagen: 'assets/img/bynes.png'},
    {nombre: 'Jabari Bird', puntos: 0, imagen: 'assets/img/bird.png'},
    {nombre: 'Jaylen Brown', puntos: 0, imagen: 'assets/img/brown.png'},
    {nombre: 'Jonathan Gibson', puntos: 0, imagen: 'assets/img/gibson.png'},
  ];
  puntosLocales = 0;
  puntosVisitantes = 0;
  topJugadores = [];

  constructor() { }

  ngOnInit() {
  }

  getCanastaLocal(event) {
    this.puntosLocales += event.puntos;
    this.locales.forEach(jugador => {
      if (jugador.nombre === event.nombre) {
        jugador.puntos += event.puntos;
      }
    });
    this.sortJugadores();
  }
  getCanastaVisitante(event) {
    this.puntosVisitantes += event.puntos;
    this.visitantes.forEach(jugador => {
      if (jugador.nombre === event.nombre) {
        jugador.puntos += event.puntos;
      }
    });
    this.sortJugadores();
  }

  sortJugadores() {
    this.topJugadores = this.locales.concat(this.visitantes);
    this.topJugadores.sort((a, b) => {
      return (b.puntos - a.puntos);
    });
  }

}
