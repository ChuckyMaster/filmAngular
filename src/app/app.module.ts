import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListeFilmComponent } from './liste-film/liste-film.component';
import { CreateFilmComponent } from './create-film/create-film.component';
import { MiniatureFilmComponent } from './miniature-film/miniature-film.component';
import { FilmService } from './film.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ListeFilmComponent,
    CreateFilmComponent,
    MiniatureFilmComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [FilmService],
  bootstrap: [AppComponent],
})
export class AppModule {}
