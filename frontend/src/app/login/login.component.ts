import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../model/korisnik';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private korisnikServis: KorisnikService, private ruter:Router) { }

  ngOnInit(): void {
  }

  korisnicko_ime:string;
  lozinka:string;
  poruka: string;
 
  vratiSe(){
    this.ruter.navigate([''])
  }

  login(){
this.korisnikServis.login(this.korisnicko_ime, this.lozinka).subscribe((korisnikDB:Korisnik)=>{
  if(this.korisnicko_ime==null || this.lozinka==null){
    this.poruka="Unesite sva polja!";
    return;
  }
  if(korisnikDB!=null){
    if(korisnikDB.lozinka!=this.lozinka){
      this.poruka="Pogresna lozinka";
    }
    if(korisnikDB.korisnicko_ime!=this.korisnicko_ime){
      this.poruka="Pogresno korisnicko ime";
    }
    localStorage.setItem('ulogovan',JSON.stringify(korisnikDB));
    if(korisnikDB.tip=='citalac'){
      
      this.ruter.navigate(['citalac']);
    }
    else {
     
      this.ruter.navigate(['moder']);
    }
  }
  else {
     
     this.poruka="Korisnik sa datim kor. imenom i lozinkom ne postoji.";
  }
})
  }
}
