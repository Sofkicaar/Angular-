import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KnjigaService } from '../knjiga.service';
import { Knjiga } from '../model/knjiga';
import { Korisnik } from '../model/korisnik';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.css', '../login/login.component.css']
})
export class PretragaComponent implements OnInit {

  constructor(private knjigaServis: KnjigaService, private ruter: Router) { }

  ngOnInit(): void {
    this.kor=JSON.parse(localStorage.getItem('ulogovan'))
    console.log(this.kor.blokiran)
  }
  kor:Korisnik;
  searchParam: string;
  searchParam1:string;
  poruka:string;

  pretrazeneKnjige2: Knjiga[]=[]
  pretrazeneKnjige1: Knjiga[]=[]
  pretraziIzdavac(){
    this.knjigaServis.pretraziIz(this.searchParam).subscribe((knjige:Knjiga[])=>{
     
      if(knjige.length==0){
        this.poruka="Nije pronadjena knjiga sa datim izdavacem."
        
      }
      else {
        this.poruka="";
      }
      localStorage.setItem('pretrazene', JSON.stringify(knjige));
      this.pretrazeneKnjige2=knjige; 
        

    })
  }
 
  pretraziNaziv(){
    this.knjigaServis.pretraziKnjiguNaziv(this.searchParam1).subscribe((knjige:Knjiga[])=>{
     
      if(knjige.length==0){
        this.poruka="Nije pronadjena knjiga sa datim nazivom."
        
      }
      else {
        this.poruka="";
      }
      localStorage.setItem('pretrazene', JSON.stringify(knjige));
      this.pretrazeneKnjige2=knjige; 
        

    })
  }
  knjigaDetalji(k){
    console.log(k.naziv)
    localStorage.setItem('pretraz', JSON.stringify(k))
    this.ruter.navigate(['knjigadetalji'])
  }
  vratiSe(){
    localStorage.removeItem('pretrazene')
    if(this.kor==null){
      this.ruter.navigate([''])
    }
    if(this.kor.tip=='citalac'){
      this.ruter.navigate(['citalac'])
    }
    else if(this.kor.tip=='moder') {
      this.ruter.navigate(['moder'])
    }
    else if(this.kor.tip=='admin') {
      this.ruter.navigate(['admin'])
    }
  }
  azurir(){
    this.ruter.navigate(['azuriraj'])
  }
}
