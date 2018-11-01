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
  jugadas: Jugada[];
  ronda: Ronda;
  totalCostoMP: number;
  totalIngresoVP: number;
  inventarioNuevo: number;
  compraMP: number;
  ventaP: number;
  saldo: number;
  inventarioActual: number;
  maxCMP: number;
  maxVP: number;
  disableCMP: boolean;
  disableVP: boolean;

  constructor(public dataService: DataService, private router: Router) {
    if (this.dataService.isLogged === false) {
      this.router.navigateByUrl('/login');
    } else {
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
      if (this.rondaActual > this.dataService.nRondas) {
        this.router.navigateByUrl('/resultados');
      }
    }
  }

  ngOnInit() {
    this.cmpMercado = Math.floor((Math.random() * 15) + 1);
    this.vpMercado = Math.floor((Math.random() * 10) + 1);
    this.ronda = this.dataService.rondas[this.rondaActual - 1];
    this.jugadas = this.ronda.jugadas;
    this.ronda.pmp = this.cmpMercado;
    this.ronda.pp = this.vpMercado;
    this.jugadas.forEach((jugada, i) => {
      jugada.maxCMP = Math.floor(jugada.saldo / this.cmpMercado);
      jugada.maxVP = jugada.inventarioActual - 1;
      jugada.compraMP = 0;
      jugada.ventaP = 0;
      if (jugada.maxCMP === 0) {
        jugada.disableCMP = true;
      }
      if (jugada.maxVP === 0) {
        jugada.disableVP = true;
      }
    });
    console.log(this.jugadas);
  }

  siguienteRondaTry() {
    this.prepararDatos();
    this.dataService.rondaActual += 1;
    this.router.navigateByUrl('/jugada');
  }

  prepararDatos() {
    if (this.rondaActual !== this.dataService.nRondas) {
      this.dataService.rondas[this.dataService.rondaActual].jugadas.forEach((jugada, index) => {
        jugada.saldo = (this.jugadas[index].ventaP * this.vpMercado) -
          (this.jugadas[index].compraMP * this.cmpMercado) + this.jugadas[index].saldo;
        jugada.inventarioActual = this.jugadas[index].inventarioActual +
          (this.jugadas[index].compraMP * this.dataService.productosPorMP) - this.jugadas[index].ventaP;
      });
    }
    this.jugadas.forEach((jugada, index) => {
      jugada.saldoResultante = (jugada.ventaP * this.vpMercado) -
        (jugada.compraMP * this.cmpMercado) + jugada.saldo;
    });
  }
}
