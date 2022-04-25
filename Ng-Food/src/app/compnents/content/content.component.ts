import { Component, OnInit } from '@angular/core';
import { bebidas } from 'src/app/models/bebidas.models';
import { comidas } from 'src/app/models/comidas.models';
import { cards } from 'src/app/models/N_food.models';
import { bebida_mock } from 'src/app/utils/bebida-mock';
import { comida_mock } from 'src/app/utils/comida-mock';
import { food_mock } from 'src/app/utils/food-mock';

@Component({
  selector: 'NGF-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  listaCards: cards[] = food_mock;
  listaComidas: comidas[] = comida_mock;
  listaBebidas: bebidas[] = bebida_mock;
  constructor() {}

  ngOnInit(): void {}
}
