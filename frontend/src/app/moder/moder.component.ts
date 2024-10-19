import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KnjigaService } from '../knjiga.service';
import { KorisnikService } from '../korisnik.service';
import { Knjiga } from '../model/knjiga';

@Component({
  selector: 'app-moder',
  templateUrl: './moder.component.html',
  styleUrls: ['./moder.component.css',  '../login/login.component.css']
})
export class ModerComponent implements OnInit {

  constructor(private korisnikServis: KorisnikService, private http: HttpClient, private ruter:Router, private knjigaServis: KnjigaService) { }

  ngOnInit( ): void {
    var danas=new Date();
    this.knjigaServis.dohvatiKnjige().subscribe((knj:Knjiga[])=>{
      this.niz=knj;
      if(this.niz!=null)this.postoji=true;
      this.knjiga=this.niz[(danas.getFullYear() * danas.getDate() * (danas.getMonth() + 1)) % this.niz.length]
    })
  }

  niz:Knjiga[]=[]
  zaduzene:Knjiga[]=[]
  knjiga:Knjiga;
  postoji:boolean;
  

  logout(){
  //  localStorage.clear
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
  dodajKnj(){
    this.ruter.navigate(['dodaj'])
  }
  
  lista(){
    this.ruter.navigate(['lista'])
  } 

}
