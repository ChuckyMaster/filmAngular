import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Film } from '../film.classe';
import { FilmService } from '../film.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.scss'],
})
export class CreateFilmComponent implements OnInit {
  constructor(
    singletonFilm: FilmService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.singletonFilm = singletonFilm;
  }

  public singletonFilm: FilmService;
  public form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    annee: new FormControl(''),
    realisateur: new FormControl(''),
    genre: new FormControl(''),
    duree: new FormControl(''),
    image: new FormControl(''),
  });

  public onSubmit(): void {
    let film = new Film(
      this.form.controls['nom'].value,
      this.form.controls['annee'].value,
      this.form.controls['genre'].value,
      this.form.controls['realisateur'].value,
      this.form.controls['duree'].value,
      this.form.controls['image'].value
    );
    console.log(this.form.get('nom')!.value);
    console.log('yo');

    this.singletonFilm.listFilm.push(film);
    this.form.reset();
    this.router.navigate(['list']);
  }
  ngOnInit(): void {}
}
