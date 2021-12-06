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
  public modeEdition = false;
  public filmModifie: Film;

  // public singletonFilm: FilmService;

  constructor(
    public singletonFilm: FilmService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // this.singletonFilm = singletonFilm;
    let idFilm = activatedRoute.snapshot.paramMap.get('id')!;

    this.filmModifie = this.singletonFilm.listFilm.find(
      (f) => f.id === parseInt(idFilm)
    )!;

    if (this.filmModifie) {
      this.form.controls['nom'].setValue(this.filmModifie.nom);
      this.form.controls['annee'].setValue(this.filmModifie.AnneeSortie);
      this.form.controls['genre'].setValue(this.filmModifie.genres);
      this.form.controls['realisateur'].setValue(this.filmModifie.realisateur);
      this.form.controls['duree'].setValue(this.filmModifie.duree);
      this.form.controls['image'].setValue(this.filmModifie.img);
      this.modeEdition = true;
    }
  }

  public form: FormGroup = new FormGroup({
    id: new FormControl(Math.floor(Math.random() * 60000)),
    nom: new FormControl(''),
    annee: new FormControl(''),
    realisateur: new FormControl(''),
    genre: new FormControl(''),
    duree: new FormControl(''),
    image: new FormControl(''),
  });

  public onSubmit(): void {
    console.log(this.form.get('nom')!.value);
    console.log('yo');

    if (!this.modeEdition) {
      let film = new Film(
        this.form.controls['id'].value,
        this.form.controls['nom'].value,
        this.form.controls['annee'].value,
        this.form.controls['genre'].value,
        this.form.controls['realisateur'].value,
        this.form.controls['duree'].value,
        this.form.controls['image'].value
      );
      this.singletonFilm.listFilm.push(film);
    } else {
      this.modif();
    }

    this.form.reset();
    this.modeEdition = false;
    this.router.navigate(['list']);
  }

  modif() {
    this.filmModifie.nom = this.form.controls['nom'].value;
    this.filmModifie.AnneeSortie = this.form.controls['annee'].value;
    this.filmModifie.genres = this.form.controls['genre'].value;
    this.filmModifie.realisateur = this.form.controls['realisateur'].value;
    this.filmModifie.duree = this.form.controls['duree'].value;
    this.filmModifie.img = this.form.controls['image'].value;
    console.log('MODIF');
  }

  ngOnInit(): void {}
}
