import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../model/korisnik';

@Component({
  selector: 'app-promeni',
  templateUrl: './promeni.component.html',
  styleUrls: ['./promeni.component.css', '../login/login.component.css']
})
export class PromeniComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private ruter:Router) { }

  ngOnInit(): void {
    this.kor=JSON.parse(localStorage.getItem('ulogovan'))
  }

  kor:Korisnik;
  staraloz:string;
  loz1:string;
  loz2:string;
  poruka:string;

  promena = new RegExp("^[A-Za-z](?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{7,11}$");
  
  promeniSifru(){
    if(!this.promena.test(this.loz1)){
      this.poruka="Lozinka nije u dozvoljenom formatu!";
      return;
    }
    if(!this.promena.test(this.loz2)){
      this.poruka="Lozinka nije u dozvoljenom formatu!";
      return;
    }
    if(this.loz1!=this.loz2){
      this.poruka="Lozinke nisu iste!"
      return;
    }
    if(this.staraloz==this.loz1 && this.staraloz==this.loz2){
      this.poruka="Lozinka nije promenjena, ista je kao i stara"
      return;
    }
    this.korisnikServis.promeniLoz(this.staraloz, this.loz1).subscribe((resp)=>{
      if(resp["poruka"]=='ok'){
        this.poruka="Promenjena"
      }
    });
    localStorage.removeItem('ulogovan')
    this.ruter.navigate([''])
  }
  pocetna(){
    this.ruter.navigate([''])
  }
  vratiSe(){
    if(this.kor.tip=='citalac'){
      this.ruter.navigate(['citalac'])
    }
    else if(this.kor.tip=='moder'){this.ruter.navigate(['moder'])}
    else {
      this.ruter.navigate(['admin'])
    }
  }
}
