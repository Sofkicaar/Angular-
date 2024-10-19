import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KnjigaService } from '../knjiga.service';
import { KorisnikService } from '../korisnik.service';
import { Knjiga } from '../model/knjiga';
import { Korisnik } from '../model/korisnik';

@Component({
  selector: 'app-citalac',
  templateUrl: './citalac.component.html',
  styleUrls: ['./citalac.component.css', '../login/login.component.css']
})
export class CitalacComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private ruter:Router, private knjigaServis:KnjigaService) { }

  ngOnInit(): void {
    var danas=new Date();
    this.kor=JSON.parse(localStorage.getItem('ulogovan'))
    this.knjigaServis.dohvatiKnjige().subscribe((knj:Knjiga[])=>{
      this.niz=knj;
      this.knjiga=this.niz[(danas.getFullYear() * danas.getDate() * (danas.getMonth() + 1)) % this.niz.length]
    })
    
   
  }
 
  

  
  niz:Knjiga[]=[]
  zaduzene:Knjiga[]=[]
  knjiga:Knjiga;
  kor:Korisnik;

  logout(){
   // localStorage.clear()
    localStorage.removeItem('ulogovan')
    this.ruter.navigate([''])
  }

  vratiSe(){
    this.ruter.navigate([''])
  }

  
  pretrazi(){
    this.ruter.navigate(['pretraga'])
  }
  profil(){
    this.ruter.navigate(['profil'])
  }
  zaduzeneKnjige(){
    this.ruter.navigate(['zaduzene'])
  }
 
  istorija(){
    this.ruter.navigate(['istorija'])
  }  
  dodajZahtev(){
    this.ruter.navigate(['dodaj'])
  }
}

