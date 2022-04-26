import { Component, OnInit } from '@angular/core';
import { bebidas } from 'src/app/models/bebidas.models';
import { bebida_mock } from 'src/app/utils/bebida-mock';

@Component({
  selector: 'NGF-bebida-lista',
  templateUrl: './bebida-lista.component.html',
  styleUrls: ['./bebida-lista.component.scss'],
})
export class BebidaListaComponent implements OnInit {
  listaBebidas: bebidas[] = bebida_mock;

  constructor() {}

  ngOnInit(): void {}
}
