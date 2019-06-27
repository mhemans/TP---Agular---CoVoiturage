import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterAnnoncePipe } from './filter-annonce.pipe';
import { AnnoncesListComponent } from './annonces-list/annonces-list.component';
import { AjouterAnnonceComponent } from './ajouter-annonce/ajouter-annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnonceComponent,
    FilterAnnoncePipe,
    AnnoncesListComponent,
    AjouterAnnonceComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
