import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../model/korisnik';
import { Zaduzene } from '../model/zaduzene';

@Component({
  selector: 'app-brisikor',
  templateUrl: './brisikor.component.html',
  styleUrls: ['./brisikor.component.css', '../login/login.component.css']
})
export class BrisikorComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private ruter:Router) { }

  ngOnInit(): void {
    this.korisnikServis.dohvatiSve().subscribe((kor:Korisnik[])=>{
     this.korisnici=kor;
    })
    console.log(this.korisnici)
    
    
  }

  
  korIme:string;
  korisnici:Korisnik[]
  poruka:string;
  zaduzene:boolean;
  ne:boolean;
  zadd:Zaduzene[]

  obrisi(korime){
  //  this.zaduzene=true;
   
    for(let i=0; i<this.korisnici.length;i++){
      if(this.korisnici[i].korisnicko_ime==korime){
       console.log(this.korisnici[i].korisnicko_ime);
      this.korisnikServis.dohvatiZaduzene(this.korisnici[i].korisnicko_ime).subscribe((zad:Zaduzene[])=>{
        if(zad.length==0){
          this.zaduzene=true;
          
        }
        else {
          this.zaduzene=false;
          console.log('u ifu sam')      
      } 
    })
   
     break;
    }
  }

  if(this.zaduzene){
    this.korisnikServis.obrisiKorisnika(korime).subscribe((resp)=>{
      if(resp["poruka"]=="ok"){
        console.log(korime)
        this.poruka="Obrisan"
      }
     })
  } 
  else {
    this.poruka="Nije moguce obrisati korisnika, jer nije razduzio sve svoje knjige."
  }
    // this.ngOnInit();
  }
  pocetna(){
    this.ruter.navigate([''])
  }

  vratiSe(){
    this.ruter.navigate(['admin'])
  }
}
