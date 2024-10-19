import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KnjigaService } from '../knjiga.service';
import { KorisnikService } from '../korisnik.service';
import { Registracija } from '../model/registracija';
import { RegService } from '../reg.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../login/login.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private ruter:Router, private knjigaServis:KnjigaService, private regServis:RegService) { }

  ngOnInit(): void {
   this.regServis.dohvati().subscribe((zah:Registracija[])=>{
    this.zahtevi=zah;
   })
  }

  dani:number;
  provera:number;
  zahtevi:Registracija[]=[]
  poruka:string;

  prihvati(z){
    this.korisnikServis.registracija(z.ime, z.prezime, z.korisnicko_ime, z.lozinka, z.adresa, z.kontakt, z.imejl, z.img, z.tip,0).subscribe((resp)=>{
          if(resp["poruka"]=="ok"){
            this.poruka="Zahtev prihvacen, korisnik registrovan."
            this.regServis.postaviP(z.korisnicko_ime, 1).subscribe((resp)=>{
              if(resp["poruka"]=="ok"){
                this.poruka="Sve ok."
                this.ngOnInit();
              }
            })
          }
    })
  }
  odbij(z){
    this.regServis.odbijZ(z.korisnicko_ime).subscribe((resp)=>{
      if(resp["poruka"]=='ok'){
        this.poruka="Zahtev odbijen, korisnik nije registrovan"
        this.ngOnInit();
      }
    })
  }
  profil(){
    this.ruter.navigate(['profil'])
  }
  pretraga(){
    this.ruter.navigate(['pretraga'])
  }
  dodajKnjigu(){
    this.ruter.navigate(['dodaj'])
  }
  dodajKorisnika(){
    this.ruter.navigate(['registracija'])
  }
  obrisiKor(){
    this.ruter.navigate(['brisikor'])
  }
  obrisiKnj(){
    this.ruter.navigate(['brisiknj'])
  }

  azuriraj(){
    this.ruter.navigate(['pretrazikor'])
  }
  vratiSe(){
    this.ruter.navigate([''])
  }
  potvrdi(){
    localStorage.setItem('dan', JSON.stringify(this.dani))
    this.provera=JSON.parse(localStorage.getItem('dan'))
   // this.ngOnInit();
  }

  logout(){
   // localStorage.clear()
    localStorage.removeItem('ulogovan')
    this.ruter.navigate([''])
  }
}
