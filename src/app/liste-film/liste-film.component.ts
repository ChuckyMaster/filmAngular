import { Component, OnInit } from '@angular/core';
import { Film } from '../film.classe';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.scss'],
})
export class ListeFilmComponent implements OnInit {
  shang = new Film(
    'Shang-chi',
    2021,
    'fantasy',
    'Destin Daniel Cretton',
    95,
    'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2021/09/Shang%20Chi%203.jpeg'
  );
  kenshin = new Film(
    'Kenshin le vagabond',
    2020,
    'fantasy',
    'Takeru Satoh',
    85,
    'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/07/29/3037446744.jpg'
  );

  listFilm: Film[] = [];

  constructor() {
    this.listFilm.push(this.shang, this.kenshin);
  }

  deleteFilm(film: Film) {
    let index = this.listFilm.indexOf(film);
    this.listFilm.splice(index, 1);
    console.log('HELLO FROM DELETE BUTTON');
  }

  ngOnInit(): void {}
}
