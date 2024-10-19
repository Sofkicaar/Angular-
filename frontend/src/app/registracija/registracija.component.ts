import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../model/korisnik';
import { Registracija } from '../model/registracija';
import { RegService } from '../reg.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css', '../login/login.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private ruter:Router, private regServis:RegService) { }

  ngOnInit(): void {
    this.url="../../assets/pp.jpeg"
    this.kor=JSON.parse(localStorage.getItem('ulogovan'))
    console.log(this.kor.ime)
  }

  ime:string;
  prezime:string;
  korisnicko_ime:string;
  lozinka:string;
  lozinkaR: string;
  kontakt:string;
  adresa:string;
  imejl:string;
  tip:string;
  kor:Korisnik;
  

  provera = new RegExp("^[A-Za-z](?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{7,11}$");
  poruka:string;
  
  registracija(){

    if(this.lozinka!=this.lozinkaR){
      alert("Lozinke nisu iste!")
      return;
    }
    if(!this.provera.test(this.lozinkaR)){
      alert("Neispravna lozinka")
      return;
    }
    this.regServis.korIme(this.korisnicko_ime).subscribe((zah1:Registracija)=>{
      if(zah1==null){
        this.regServis.mejl(this.imejl).subscribe((zah:Registracija)=>{
          if(zah==null){
          this.regServis.zahtev(this.ime, this.prezime, this.korisnicko_ime, this.lozinka, this.adresa, this.kontakt,this.imejl, this.url, this.tip, 0,0).subscribe(resp=>{
              if(resp['poruka']=='ok'){
              
                this.ruter.navigate([''])
                this.poruka="Zahtev poslat"
              }
              else {
                this.poruka="Greska"
            }
            })
          }
          else {
            this.poruka="Mejl vec postoji."
            return;
          }
        })
      }   
      else {
        this.poruka="Korisnicko ime vec postoji."
        return;
      }
   
  })
}

url:any;
obavestenje:String;
slika: String;

izaberiSliku(event){
  let file=event.target.files[0];
  this.slika=file;

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
pocetna(){
  if(this.kor.tip=='admin'){
     this.ruter.navigate(['admin'])
  }
  else
  this.ruter.navigate(['']);
}

}
