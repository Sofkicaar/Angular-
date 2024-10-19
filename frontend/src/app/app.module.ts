import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistracijaComponent } from './registracija/registracija.component';

import { LoginComponent } from './login/login.component';
import { CitalacComponent } from './citalac/citalac.component';
import { AdminComponent } from './admin/admin.component';
import { ModerComponent } from './moder/moder.component';
import {HttpClientModule} from '@angular/common/http';
import { PocetnaComponent } from './pocetna/pocetna.component';
import {MatMenuModule} from '@angular/material/menu';
import {
  MatButtonModule,
} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PretragaComponent } from './pretraga/pretraga.component';
import { ProfilComponent } from './profil/profil.component';
import { KnjigadetaljiComponent } from './knjigadetalji/knjigadetalji.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { ZaduzeneComponent } from './zaduzene/zaduzene.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';  
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { DodajComponent } from './dodaj/dodaj.component';
import { AzurirajComponent } from './azuriraj/azuriraj.component';
import { AdminlogComponent } from './adminlog/adminlog.component';

import { BrisikorComponent } from './brisikor/brisikor.component';
import { BrisiknjComponent } from './brisiknj/brisiknj.component';
import { PretrazikorComponent } from './pretrazikor/pretrazikor.component';

import { PromeniComponent } from './promeni/promeni.component';
import { IstorijaComponent } from './istorija/istorija.component';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { ListaComponent } from './lista/lista.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    RegistracijaComponent,
    LoginComponent,
    CitalacComponent,
    AdminComponent,
    ModerComponent,
    PocetnaComponent,
    PretragaComponent,
    ProfilComponent,
    KnjigadetaljiComponent,
    ZaduzeneComponent,
    DodajComponent,
    AzurirajComponent,
    AdminlogComponent,
    BrisikorComponent,
    BrisiknjComponent,
    PretrazikorComponent,

    PromeniComponent,
     IstorijaComponent,
     ListaComponent
  ],
  imports: [
    MatCardModule,
MatTabsModule
,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatListModule,
    NgbModule,
    NgImageSliderModule,
    SlickCarouselModule,
    MatSortModule,
    MatIconModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
