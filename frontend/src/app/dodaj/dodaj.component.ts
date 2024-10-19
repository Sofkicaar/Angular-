import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KnjigaService } from '../knjiga.service';
import { KorisnikService } from '../korisnik.service';
import { Knjiga } from '../model/knjiga';
import { Korisnik } from '../model/korisnik';
import { ZahtevService } from '../zahtev.service';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.css', '../login/login.component.css']
})
export class DodajComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private ruter:Router, private knjigaServis:KnjigaService
    ,private zahtevServis:ZahtevService) { }

  ngOnInit(): void {
    this.kor=JSON.parse(localStorage.getItem('ulogovan'))
    this.url="../../assets/knjigapodr.jpg";
    
  }

zanrovi=[
  'arheologija','arhitektura','antikvarne,','autobiografija', 'beletristika','biografija','biznis','decije',
  'drame','elektrotehnika','enciklopedija','eseji','fantastika','film','filozofija','fizika','klasika','komedija','memoari',
  'poezija','porodicna','putopisi', 'religija'
]

  naziv: String;
  pisac: String;
  uzeta:Number;
  zanroviNiz: string[]=[];
  godinaIzdavanja: Number;
  izdavac: String;
  jezik: String;
  idKnj:Number;
  ocena:Number;
  brojKnjiga: Number;
  zaduzio: String;
  slika: String;
  poruka: String;
  url: any;
  kor:Korisnik;

  dodajKnjigu(){
    this.knjigaServis.dohvatiKnjige().subscribe((knjige: Knjiga[])=>{
    //  this.poruka="ovdeeee"
      let novi=knjige.length+1;
     // this.poruka="eeeeeeeeeeeee";
      console.log(this.zanroviNiz)
      console.log(this.zanroviNiz.length)
     
     
      this.knjigaServis.dodajKnj(this.naziv, this.pisac, 0,
        this.zanroviNiz, this.godinaIzdavanja, this.izdavac, this.jezik, novi, this.brojKnjiga,this.url,"").subscribe((resp)=>{
          if(resp['poruka']=='ok'){
            console.log("ej usao da dodam")
            this.poruka="Knjiga je uspesno dodata.";
            this.ruter.navigate([''])
          }
          else {
            this.poruka="nisam dodao"
          }
        })
     
    })
   
  }

  dodajZanr(event:any){
    var zanrr=event.target.options;
    var opcija:any;
    for(let i=0;i<zanrr.length;i++){
      opcija=zanrr[i];
      if(opcija.selected){
        this.zanroviNiz.push(this.zanrovi[i])
        if(this.zanroviNiz.length>3){
          this.poruka="Ne mozete izabrati vise od 3 zanra."
          return;
        }
      }
    }
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


  dodajZahtev(){
    this.knjigaServis.dohvatiKnjige().subscribe((knjige: Knjiga[])=>{
      console.log('u dodajzahtev')
      let novi=knjige.length+1;
      this.zahtevServis.dodajKnjigu(this.naziv, this.pisac, 0,
        this.zanroviNiz, this.godinaIzdavanja, this.izdavac, this.jezik, novi, this.brojKnjiga,this.slika, 0,"").subscribe((resp)=>{
          if(resp['poruka']=='ok'){
            console.log("ej usao da dodam")
            this.poruka="Zahtev poslat.";
            this.ruter.navigate([''])
          }
          else {
            this.poruka="Neuspesno."
            console.log("jok")
          }
        })
  })
  }
  vratiSe(){
    if(this.kor.tip=='moder'){
      this.ruter.navigate(['moder'])
    }
    else if(this.kor.tip=='citalac'){
      this.ruter.navigate(['citalac'])
    }
    else {
      this.ruter.navigate(['admin'])
    }
  }
  pocetna(){
    this.ruter.navigate([''])
  }
}
