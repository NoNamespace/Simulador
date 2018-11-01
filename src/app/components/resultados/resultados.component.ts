import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  resultados: number[] = [
    1, 2, 3, 4
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
