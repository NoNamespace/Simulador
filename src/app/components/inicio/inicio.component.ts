import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  username = 'GuestUser';
  private _nGrupos;
  private _nRondas;
  private _inventarioInicial;
  private _productosPorMP;

  constructor(public dataService: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  startSesion() {
    this.dataService.iniciarRondas();
    this.router.navigateByUrl('/jugada');
  }

  get nGrupos(): number {
    return this.dataService.nGrupos;
  }

  set nGrupos(value: number) {
    this.dataService.nGrupos = value;
  }

  get nRondas(): number {
    return this.dataService.nRondas;
  }

  set nRondas(value: number) {
    this.dataService.nRondas = value;
  }

  get inventarioInicial(): number {
    return this.dataService.inventarioInicial;
  }

  set inventarioInicial(value: number) {
    this.dataService.inventarioInicial = value;
  }

  get productosPorMP(): number {
    return this.dataService.productosPorMP;
  }

  set productosPorMP(value: number) {
    this.dataService.productosPorMP = value;
  }
}
