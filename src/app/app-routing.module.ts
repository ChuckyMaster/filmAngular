import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFilmComponent } from './create-film/create-film.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListeFilmComponent } from './liste-film/liste-film.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'list', component: ListeFilmComponent },
  { path: 'create', component: CreateFilmComponent },
  { path: '**', redirectTo: 'homepage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
