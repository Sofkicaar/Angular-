import { identifierName, LiteralExpr } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KnjigaService } from '../knjiga.service';
import { KorisnikService } from '../korisnik.service';
import { Knjiga } from '../model/knjiga';
import { Korisnik } from '../model/korisnik';
import {
  NgbCarouselConfig,
  NgbSlideEvent,
  NgbSlideEventSource,
  NgbCarousel,
} from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css','../login/login.component.css']
})
export class PocetnaComponent implements OnInit {
  constructor(
    private korisnikServis: KorisnikService,
    private ruter: Router,
    private knjigeServis: KnjigaService,
    config: NgbCarouselConfig
  ) {
    config.interval = 3000;
  }
  in: number = 0;
  uvecaj() {
    this.in = (this.in + 1) % 3;
  }
  ngOnInit(): void {
    this.knjigeServis.dohvatiKnjige().subscribe((knj: Knjiga[]) => {
      this.knjige = knj;
      for (let i = 0; i < 3; i++) {
        this.sveTri.push(this.knjige[i]);
      }
    });
    this.kor = JSON.parse(localStorage.getItem('ulogovan'));
    if (this.kor == null) {
      this.log = false;
      this.poruka = 'kor je null';
    } else if(this.kor.tip=='moder'){
      this.log = true;
      this.moder=true;
    }
    else if(this.kor.tip=='admin'){
      this.log = true;
      this.admin=true;
    }else if(this.kor.tip=='citalac'){
      this.log = true;
     
    }
  }

  knjige: Knjiga[] = [];
  sveTri: Knjiga[] = [];
  poruka: string;
  kor: Korisnik;
  log: boolean;
  moder:boolean;
  admin:boolean;
  
  odlog: boolean;

  login() {
    this.ruter.navigate(['login']);
  }
  registracija() {
    this.ruter.navigate(['registracija']);
  }

  pretrazi() {
    this.ruter.navigate(['pretraga']);
  }
  profil() {
    this.ruter.navigate(['profil']);
  }

  odjava() {
    localStorage.removeItem('ulogovan');
    this.ngOnInit();

    //this.log=false;
  }

  dodajKnjigu(){
    this.ruter.navigate(['dodaj'])
  }
  promeniSifru(){
   
      this.ruter.navigate(['promeni'])
  
  }
}
