import {Injectable} from '@angular/core';
import {Ronda} from './model/ronda';
import {forEach} from '@angular/router/src/utils/collection';
import {Jugada} from './model/jugada';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _nGrupos = 4;
  private _nRondas = 4;
  private _rondaActual = 1;
  private _isLogged = false;
  private _rondas: Ronda[] = [];
  private _inventarioInicial = 4;
  private _productosPorMP = 4;
  private _saldo = 0;

  constructor() {
  }

  iniciarRondas() {
    this._rondas = [];
    for (let i = 0; i < this._nRondas; i++) {
      this._rondas.push(new Ronda());
    }
    this._rondas.forEach((ronda, i) => {
      ronda.idronda = i;
      for (let j = 0; j < this._nGrupos; j++) {
        ronda.jugadas.push(new Jugada());
      }
      ronda.jugadas.forEach((jugada, j) => {
        jugada.idjugada = j;
      });
    });
  }

  get rondaActual(): number {
    return this._rondaActual;
  }

  set rondaActual(value: number) {
    this._rondaActual = value;
  }

  get nGrupos(): number {
    return this._nGrupos;
  }

  set nGrupos(value: number) {
    this._nGrupos = value;
  }

  get nRondas(): number {
    return this._nRondas;
  }

  set nRondas(value: number) {
    this._nRondas = value;
  }

  get isLogged(): boolean {
    return this._isLogged;
  }

  set isLogged(value: boolean) {
    this._isLogged = value;
  }

  get rondas(): Ronda[] {
    return this._rondas;
  }

  set rondas(value: Ronda[]) {
    this._rondas = value;
  }

  get inventarioInicial(): number {
    return this._inventarioInicial;
  }

  set inventarioInicial(value: number) {
    this._inventarioInicial = value;
  }

  get productosPorMP(): number {
    return this._productosPorMP;
  }

  set productosPorMP(value: number) {
    this._productosPorMP = value;
  }

  get saldo(): number {
    return this._saldo;
  }

  set saldo(value: number) {
    this._saldo = value;
  }
}
