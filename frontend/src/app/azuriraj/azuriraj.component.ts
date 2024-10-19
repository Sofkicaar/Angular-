import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { KnjigaService } from '../knjiga.service';
import { KorisnikService } from '../korisnik.service';
import { Knjiga } from '../model/knjiga';
import { Korisnik } from '../model/korisnik';
import { Zaduzene } from '../model/zaduzene';

@Component({
  selector: 'app-azuriraj',
  templateUrl: './azuriraj.component.html',
  styleUrls: ['./azuriraj.component.css', '../login/login.component.css']
})
export class AzurirajComponent implements OnInit {

  constructor(private knjigaServis:KnjigaService, private ruter:Router,private korisnikServis:KorisnikService) { }

  ngOnInit(): void {
    this.postojiKnj=false;
    this.knjiga=JSON.parse(localStorage.getItem('pretrazene'))
    this.kor=JSON.parse(localStorage.getItem('ulogovan'))
    this.korisnikServis.dohvatiSve().subscribe((koris:Korisnik[])=>{
      this.korisnici=koris;
    })
    this.klikkor=JSON.parse(localStorage.getItem('korisnik'))
    this.klikknj=JSON.parse(localStorage.getItem('knjiga'))
    if(this.klikknj){
this.postojiKnj=true;
    }
   
    localStorage.removeItem('korisnik')
    localStorage.removeItem('knjiga')

  }
  zanrovi=[
    'arheologija','arhitektura','antikvarne,','autobiografija', 'beletristika','biografija','biznis','decije',
    'drame','elektrotehnika','enciklopedija','eseji','fantastika','film','filozofija','fizika','klasika','memoari',
    'poezija','putopisi', 'religija'
  ]

  klikkor:Korisnik;
  klikknj:Knjiga;
  postojiKnj:boolean;
 
  naziv:string;
  pisac:string;
  jezik:string;
  zanr:string[];
  izdavac:string;
  slika:string;
  broj:number;
  godinaizd:number;
  poruka:string;
  url:any;
  kor:Korisnik;
  slika1:string;
  ime:string;
  prezime:string;
  tip:string;
  korIme:string;
  lozinka:string;
  imejl:string;
  kontakt:string;
  adresa:string;
  poruka1:string;
  url1:any;
  korisnici:Korisnik[]=[]
  knjiga:Knjiga[];
  zaduz:Zaduzene[]=[];

  azurirajKnjigu(k){
    
    this.knjigaServis.azuriraj(k.idKnj,this.naziv?this.naziv:k.naziv, this.pisac?this.pisac:k.pisac, 
      this.godinaizd?this.godinaizd:k.godinaIzdavanja, this.zanr?this.zanr:k.zanr, this.jezik?this.jezik:k.jezik,
      this.izdavac?this.izdavac:k.izdavac, this.broj?this.broj:k.brojKnjiga, this.url?this.url:k.img).subscribe((resp)=>{
      if(resp['poruka']='ok'){
       console.log("ovde sammmm")
        this.poruka="azurirana!";
        this.ruter.navigate(['admin'])
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
  dodajZanr(event:any){
    var zanrr=event.target.options;
    var opcija:any;
    for(let i=0;i<zanrr.length;i++){
      opcija=zanrr[i];
      if(opcija.selected){
        this.zanr.push(this.zanrovi[i])
        if(this.zanr.length==3){
          this.poruka="Ne mozete izabrati vise od 3 zanra."
          
        }
      }
    }
   }

  azurirajKorisnika(kori){
   console.log(kori.korisnicko_ime)
    this.korisnikServis.azuriraj(kori.korisnicko_ime,
      this.ime?this.ime:kori.ime, this.prezime?this.prezime:kori.prezime, 
      this.adresa?this.adresa:kori.adresa,this.kontakt?this.kontakt:kori.kontakt,this.tip?this.tip:kori.tip, this.url1?this.url1:kori.img).subscribe((resp)=>{
        if(resp['poruka']=='ok'){
          this.poruka1="Azuriran"
          this.ruter.navigate(['admin'])
        }
      })  
  }
  izaberiSlikuKor(event){
    let file=event.target.files[0];
    
    this.slika1=file;
    console.log(this.slika1)
     if(file){
      
      let reader=new FileReader();
      reader.readAsDataURL(file);
      reader.onload=()=>{
        var img=new Image();
        img.src=reader.result as string;
        console.log(img.src)
        this.url1=reader.result;
        img.onload=() => {
  
       }
      }
    }
  }

  
  vratiSe(){
   
    if(this.kor.tip=='moder'){
      this.ruter.navigate(['moder'])
    }
    else {
      this.ruter.navigate(['admin'])
    }
  }
  pocetna(){
    this.ruter.navigate([''])
  }
}
