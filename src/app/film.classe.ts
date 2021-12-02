export class Film {
  nom: string;
  AnneeSortie: number;
  genres: string;
  realisateur: string;
  duree: number;
  img: string;

  constructor(
    nom: string,
    AnneeSortie: number,
    genres: string,
    realisateur: string,
    duree: number,
    img: string
  ) {
    this.nom = nom;
    this.AnneeSortie = AnneeSortie;
    this.genres = genres;
    this.realisateur = realisateur;
    this.duree = duree;
    this.img = img;
  }
}
