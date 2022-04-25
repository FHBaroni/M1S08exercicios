import { Component, OnInit } from '@angular/core';
import { comidas } from 'src/app/models/comidas.models';
import { comida_mock } from 'src/app/utils/comida-mock';

@Component({
  selector: 'NGF-comida-lista',
  templateUrl: './comida-lista.component.html',
  styleUrls: ['./comida-lista.component.scss'],
})
export class ComidaListaComponent implements OnInit {
  listaComidas: comidas[] = comida_mock;
  constructor() {}

  ngOnInit(): void {}
}
