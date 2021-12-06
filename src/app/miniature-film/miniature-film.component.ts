import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../film.classe';

@Component({
  selector: 'app-miniature-film',
  templateUrl: './miniature-film.component.html',
  styleUrls: ['./miniature-film.component.scss'],
})
export class MiniatureFilmComponent implements OnInit {
  @Input() film!: Film;
  @Output() delete: EventEmitter<string> = new EventEmitter();

  constructor(private routeur: Router) {}

  ngOnInit(): void {}

  deleteFilm() {
    this.delete.emit();
  }

  modifFilm() {
    this.routeur.navigate(['create', this.film.id]);
  }
}
