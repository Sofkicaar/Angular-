import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitalacComponent } from '../citalac/citalac.component';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../model/korisnik';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css', '../login/login.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private ruter:Router) { }

  ngOnInit(): void {
    this.cit=JSON.parse(localStorage.getItem('ulogovan'));
  }
  
  cit:Korisnik;
  url: any;
  slika: string;
  ime:string;
  prezime:string;
  lozinka:string;
  korIme:string;
  adresa:string;
  kontakt:string;
  imejl:string;
  tip:string;
  poruka:string;
  
  provera = new RegExp("^[A-Za-z](?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{7,11}$");
  azurirajPodatke(citt){
    this.korisnikServis.dohvatiKorisnickoIme(this.korIme).subscribe((kor:Korisnik)=>{
      if(kor==null){
        this.korisnikServis.dohvatiMejl(this.imejl).subscribe((kor1:Korisnik)=>{
          if(kor1==null){
           
            this.korisnikServis.azurirajSve(this.korIme?this.korIme:citt.korisnicko_ime,
              this.ime?this.ime:citt.ime, this.prezime?this.prezime:citt.prezime, this.lozinka?this.lozinka:citt.lozinka,
              this.adresa?this.adresa:citt.adresa,this.kontakt?this.kontakt:citt.kontakt,this.imejl?this.imejl:citt.imejl,this.tip?this.tip:citt.tip, this.url?this.url:citt.img).subscribe((resp)=>{
                if(!this.provera.test(this.lozinka)){
                  this.poruka="Lozinka nije u dozvoljenom formatu!"
                  return;
                }
                 if(resp["poruka"]=='ok'){
                  this.poruka="Azurirano"
                 }
              })
          }
          else {
            this.poruka="Imejl vec postoji."
            return;
          }
        })
      }
      else {
        this.poruka="Korisnicko ime vec zauzeto."
        return;
      }
    })
  }

  izaberiSliku(event){
    let file=event.target.files[0];
    
    this.slika=file;
    console.log(this.slika)
     if(file){
      
      let reader=new FileReader();
      reader.readAsDataURL(file);
      reader.onload=()=>{
        var img=new Image();
        img.src=reader.result as string;
        console.log(img.src)
        this.url=reader.result;
        img.onload=() => {
  
       }
      }
    }
  }
 
  
  vratiSe(){
    if(this.cit.tip=='citalac')
    this.ruter.navigate(['citalac'])
    else if(this.cit.tip=='moder')
    this.ruter.navigate(['moder'])
    else this.ruter.navigate(['admin'])
  }
  
  
  
}
