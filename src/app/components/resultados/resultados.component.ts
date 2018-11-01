import {Component, OnInit} from '@angular/core';
import {Jugada} from '../../model/jugada';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  ultimasJugadas: Jugada[];
  ultimoPP: number;

  constructor(private dataService: DataService) {
    this.ultimasJugadas = this.dataService.rondas[this.dataService.nRondas - 1].jugadas;
    this.ultimoPP = this.dataService.rondas[this.dataService.nRondas - 1].pp;
  }

  ngOnInit() {
  }

}
