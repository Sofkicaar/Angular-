import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';

import { Korisnik } from '../model/korisnik';

@Component({
  selector: 'app-adminlog',
  templateUrl: './adminlog.component.html',
  styleUrls: ['./adminlog.component.css', '../login/login.component.css']
})
export class AdminlogComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private ruter:Router) { }

  ngOnInit(): void {
  }

  korisnicko_ime:string;
  lozinka:string;
  poruka:string;

  prijava(){
    this.korisnikServis.login(this.korisnicko_ime, this.lozinka).subscribe((kor:Korisnik)=>{
      if(kor.tip=='admin'){
        localStorage.setItem('ulogovan',JSON.stringify(kor))
        this.poruka="Prijavljen"
        this.ruter.navigate(['admin'])
      }
      else {
        this.poruka="Greska!"
      }
    })
  }
  vratiSe(){
    this.ruter.navigate([''])
  }
}
