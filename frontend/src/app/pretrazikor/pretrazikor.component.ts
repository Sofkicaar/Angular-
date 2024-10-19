import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KnjigaService } from '../knjiga.service';
import { KorisnikService } from '../korisnik.service';
import { Knjiga } from '../model/knjiga';
import { Korisnik } from '../model/korisnik';

@Component({
  selector: 'app-pretrazikor',
  templateUrl: './pretrazikor.component.html',
  styleUrls: ['./pretrazikor.component.css', '../login/login.component.css']
})
export class PretrazikorComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private ruter:Router, private knjigaServis:KnjigaService) { }

  ngOnInit(): void {
    this.korisnikServis.dohvatiSve().subscribe((kor:Korisnik[])=>{
      this.sviKor=kor;
    })
    this.knjigaServis.dohvatiKnjige().subscribe((knj:Knjiga[])=>{
      this.sveKnjige=knj;
    })
  }

  sveKnjige:Knjiga[]=[];
  sviKor:Korisnik[]=[];
  poruka:string;
  tip:string;

  azurirajkor(k){
    localStorage.setItem('korisnik', JSON.stringify(k))
    this.ruter.navigate(['azuriraj'])
  }

  blokirajkor(k){
    this.korisnikServis.blokirajKor(k.korisnicko_ime, 1).subscribe((resp)=>{
      if(resp["poruka"]=='ok'){
        this.poruka="Korisnik je blokiran."
      }
    })
  }
  azurirajknj(k){
    localStorage.setItem('knjiga', JSON.stringify(k))
    this.ruter.navigate(['azuriraj'])
  }

 
}
