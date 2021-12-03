import { Component, OnInit } from '@angular/core';
import { Film } from '../film.classe';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.scss'],
})
export class ListeFilmComponent implements OnInit {
  listFilm: Film[];

  constructor(public singletonFilmS: FilmService) {
    this.listFilm = this.singletonFilmS.listFilm;
  }

  deleteFilm(film: Film) {
    let index = this.listFilm.indexOf(film);
    this.listFilm.splice(index, 1);
    console.log('HELLO FROM DELETE BUTTON');
  }

  ngOnInit(): void {}
}
