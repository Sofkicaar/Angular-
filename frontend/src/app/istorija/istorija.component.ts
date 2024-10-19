import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { KnjigaService } from '../knjiga.service';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../model/korisnik';
import { Zaduzene } from '../model/zaduzene';

@Component({
  selector: 'app-istorija',
  templateUrl: './istorija.component.html',
  styleUrls: ['./istorija.component.css', '../login/login.component.css']
})
export class IstorijaComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private knjigaServis:KnjigaService, private ruter:Router) { }

  ngOnInit(): void {

    this.kor=JSON.parse(localStorage.getItem('ulogovan'))
    this.korisnikServis.dohvatiZaduzene(this.kor.korisnicko_ime).subscribe((knj:Zaduzene[])=>{
      this.knjige=knj.slice();
      this.pomoc=knj.slice();
    })
  }

  kor:Korisnik;
  knjige:Zaduzene[]=[];
  pomoc:Zaduzene[]=[]

  sortiraj(sort: Sort){
    const data=this.pomoc;
    if (!sort.active || sort.direction === '') {
      this.knjige = data;
      return;
    }
    this.knjige = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'datumVrac':
          return compare(a.datumVrac, b.datumVrac, isAsc);
        case 'naziv':
          return compare(a.naziv, b.naziv, isAsc);
        case 'autor':
          return compare(a.autor, b.autor, isAsc);
        case 'datumZad':
          return compare(a.datumZad, b.datumZad, isAsc);
        default:
          return 0;
      }
    });
  }


  detalji(k){
    localStorage.removeItem('zaduz')
    localStorage.setItem('zaduz', JSON.stringify(k))
    this.ruter.navigate(['knjigadetalji']);
  }
  pocetna(){
    this.ruter.navigate([''])
  }
  vratiSe(){
    if(this.kor.tip=='citalac')
    this.ruter.navigate(['citalac'])
    else if(this.kor.tip=='moder')
    this.ruter.navigate(['citalac'])
    else  this.ruter.navigate(['admin'])
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}