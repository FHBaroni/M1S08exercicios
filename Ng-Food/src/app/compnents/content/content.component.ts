import { Component, OnInit } from '@angular/core';

interface cards {
  titulo: string;
  imagem: string;
}
@Component({
  selector: 'NGF-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  listaCards: cards[] = [
    {
      titulo: 'Comida',
      imagem: 'assets/comida.jpg',
    },
    {
      titulo: 'Bebida',
      imagem: 'assets/bebida.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
