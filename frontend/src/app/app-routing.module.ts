import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { AzurirajComponent } from './azuriraj/azuriraj.component';

import { BrisiknjComponent } from './brisiknj/brisiknj.component';
import { BrisikorComponent } from './brisikor/brisikor.component';
import { CitalacComponent } from './citalac/citalac.component';
import { DodajComponent } from './dodaj/dodaj.component';

import { IstorijaComponent } from './istorija/istorija.component';
import { KnjigadetaljiComponent } from './knjigadetalji/knjigadetalji.component';
import { ListaComponent } from './lista/lista.component';
import { LoginComponent } from './login/login.component';
import { ModerComponent } from './moder/moder.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { PretrazikorComponent } from './pretrazikor/pretrazikor.component';
import { ProfilComponent } from './profil/profil.component';
import { PromeniComponent } from './promeni/promeni.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { ZaduzeneComponent } from './zaduzene/zaduzene.component';

const routes: Routes = [
  {path:"", component:PocetnaComponent},
  {path:"login", component:LoginComponent},
  {path:"admin", component:AdminComponent},
  {path:"citalac", component:CitalacComponent},
  {path:"moder", component:ModerComponent},
  {path:"registracija", component:RegistracijaComponent},
  {path:"pretraga", component:PretragaComponent},
  {path:"profil", component:ProfilComponent},
  {path:"knjigadetalji", component:KnjigadetaljiComponent},
  {path:"zaduzene", component:ZaduzeneComponent},
  {path:"dodaj", component:DodajComponent},
  {path:"azuriraj", component:AzurirajComponent},
  {path:"adminlog", component:AdminlogComponent},
  {path:"brisikor", component:BrisikorComponent},
  {path:"brisiknj", component:BrisiknjComponent},
 
  {path:"pretrazikor", component:PretrazikorComponent},
  {path:"promeni", component:PromeniComponent},
  {path:"istorija", component:IstorijaComponent},
  {path:"lista", component:ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
