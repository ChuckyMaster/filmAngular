export class Film {
  id: number;
  nom: string;
  AnneeSortie: number;
  genres: string;
  realisateur: string;
  duree: number;
  img: string;

  constructor(
    id: number,
    nom: string,
    AnneeSortie: number,
    genres: string,
    realisateur: string,
    duree: number,
    img: string
  ) {
    this.id = id;
    this.nom = nom;
    this.AnneeSortie = AnneeSortie;
    this.genres = genres;
    this.realisateur = realisateur;
    this.duree = duree;
    this.img = img;
  }
}
