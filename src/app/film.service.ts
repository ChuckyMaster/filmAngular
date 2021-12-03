import { Injectable } from '@angular/core';
import { Film } from './film.classe';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  listFilm: Film[] = [];

  constructor() {
    let shang = new Film(
      'Shang-chi',
      2021,
      'fantasy',
      'Destin Daniel Cretton',
      95,
      'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2021/09/Shang%20Chi%203.jpeg'
    );
    let kenshin = new Film(
      'Kenshin le vagabond',
      2020,
      'fantasy',
      'Takeru Satoh',
      85,
      'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/07/29/3037446744.jpg'
    );

    this.listFilm.push(shang, kenshin);
  }
}
