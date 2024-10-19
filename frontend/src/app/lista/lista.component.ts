import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KnjigaService } from '../knjiga.service';
import { KorisnikService } from '../korisnik.service';
import { Knjiga } from '../model/knjiga';
import { Korisnik } from '../model/korisnik';
import { Zahtev } from '../model/zahtev';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css', '../login/login.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private knjigaServis:KnjigaService, private ruter:Router,
    private zahtevServis:ZahtevService) { }

  ngOnInit(): void {
    this.zahtevServis.dohvatiSve().subscribe((zah:Zahtev[])=>{
      this.zahtevi=zah;
    })
    this.kor=JSON.parse(localStorage.getItem('ulogovan'))
    this.knjigaServis.dohvatiKnjige().subscribe((knj:Knjiga[])=>{
      this.sveKnjige=knj;
    })
  }

  zahtevi:Zahtev[]=[];
  kor:Korisnik;
  poruka:string;
  sveKnjige:Knjiga[]=[];

  prihvati(k){
    let novidId=this.sveKnjige.length+1;
    this.knjigaServis.dodajKnj(k.naziv, k.pisac, k.uzeta, k.zanr, k.godinaIzdavanja, k.izdavac,
      k.jezik, novidId, k.brojKnjiga, k.img,0).subscribe((resp)=>{
        if(resp["poruka"]=='ok'){
          this.zahtevServis.postavi(k.idKnj, 1).subscribe((resp)=>{
            if(resp["poruka"]=='ok'){
              this.poruka="Uspesno dodata."
              this.ngOnInit();
            }
          })
        }
      })
  }

  odbij(k){
    this.zahtevServis.odbij(k.idKnj).subscribe((resp)=>{
      if(resp["poruka"]=='ok'){
        this.poruka="Odbijen zahtev."
        this.ngOnInit();
      }
    })
  }

  vratiSe(){
    this.ruter.navigate(['moder'])
  }
  pocetna(){
    this.ruter.navigate([''])
  }


}
