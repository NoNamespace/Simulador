import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {NavigationEnd, Router} from '@angular/router';
import {Jugada} from '../../model/jugada';
import {Ronda} from '../../model/ronda';

@Component({
  selector: 'app-jugada',
  templateUrl: './jugada.component.html',
  styleUrls: ['./jugada.component.css']
})
export class JugadaComponent implements OnInit {

  cmpMercado: number;
  vpMercado: number;
  rondaActual: number;
  nextView: string;
  nGrupos: Jugada[];
  ronda: Ronda;
  totalCostoMP: number;
  totalIngresoVP: number;
  inventarioNuevo: number;
  compraMP: number;
  ventaP: number;
  saldo: number;
  maxCMP: number;
  maxVP: number;

  constructor(public dataService: DataService, private router: Router) {
    this.rondaActual = this.dataService.rondaActual;
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
    if (this.rondaActual === this.dataService.nRondas) {
      this.nextView = '/resultados';
    } else {
      this.nextView = '/jugada';
    }
  }

  ngOnInit() {
    this.cmpMercado = Math.floor((Math.random() * 15) + 1);
    this.vpMercado = Math.floor((Math.random() * 10) + 1);
    this.ronda = this.dataService.rondas[this.rondaActual - 1];
    this.nGrupos = this.ronda.jugadas;
    this.ronda.pmp = this.cmpMercado;
    this.ronda.pp = this.vpMercado;
  }

  siguienteRonda() {
    this.dataService.rondaActual += 1;
  }
}
