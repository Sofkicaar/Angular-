import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { KnjigaService } from '../knjiga.service';
import { KorisnikService } from '../korisnik.service';
import { Knjiga } from '../model/knjiga';
import { Korisnik } from '../model/korisnik';
import { Zaduzene } from '../model/zaduzene';

@Component({
  selector: 'app-zaduzene',
  templateUrl: './zaduzene.component.html',
  styleUrls: ['./zaduzene.component.css', '../login/login.component.css']
})
export class ZaduzeneComponent implements OnInit {

  constructor(private ruter:Router, private korisnikServis:KorisnikService, private knjigaServis:KnjigaService) { }

  ngOnInit(): void {
    this.produzen=false;
    this.istekao=false;
    this.null=false;
    this.prikazi=false;
    this.danas=new Date();
    var dan=String(this.danas.getDate()).padStart(2, '0');
    var mesec=String(this.danas.getMonth()+1).padStart(2, '0');
    var godina=this.danas.getFullYear();
    this.datum=dan +" - " + mesec + " - " + godina;
    
    this.kor=JSON.parse(localStorage.getItem('ulogovan'))
    this.korisnikServis.dohvatiZaduzene(this.kor.korisnicko_ime).subscribe((knj:Zaduzene[])=>{

      if(knj.length==0){
        this.prikazi=false;
        this.poruka="Citalac nema zaudzenih knjiga."
        return;
      }
      else {
        for(let i=0; i<knj.length; i++){
          if(knj[i].datumVrac==null){
            this.pomocKnjige.push(knj[i])
          }
        }
      }
     
      this.prikazi=true;
      this.zaduzeneKnjige=this.pomocKnjige;
      this.brojKnjiga=this.zaduzeneKnjige.length;
    })

    this.korisnikServis.dohvatiDane(this.kor.korisnicko_ime).subscribe((knj:Zaduzene[])=>{
      for(let i=0; i<knj.length; i++){
        this.daniVrac[i]=knj[i].dani;
      }
    })
    this.korisnikServis.dohvatiDatum(this.kor.korisnicko_ime).subscribe((knj:Zaduzene[])=>{
      for(let i=0; i<knj.length; i++){
        this.datumZad[i]=knj[i].datumZad;
        console.log(this.datumZad[i])
        const [day, month, year] = knj[i].datumZad.split('-');
        this.stringDatum[i]= new Date(+year, +month - 1, +day);
        console.log(this.stringDatum[i])
        console.log(this.daniVrac[i])
        this.preostaliDani[i]=this.daniVrac[i]-Math.floor((Date.UTC(this.danas.getFullYear(), this.danas.getMonth(), this.danas.getDate()) - Date.UTC(this.stringDatum[i].getFullYear(), this.stringDatum
        [i].getMonth(), this.stringDatum[i].getDate()) ) /(1000 * 60 * 60 * 24));
        console.log(this.preostaliDani[i])
        if(this.preostaliDani[i]>14){
          this.preostaliDani[i]=14;
        }
      
       
        
      }

    })
    
  }
  produzen:boolean;
  istekao:boolean;
  pomocKnjige:Zaduzene[]=[];
  kor:Korisnik;
  poruka:string;
  brojKnjiga:number;
  prikazi:boolean;
  stringDatum:Date[]=[];
  zaduzeneKnjige:Zaduzene[]=[]
  datum:String;
  danas:Date;
  pomoc:String;
  datumZad:string[]=[];
  daniVrac:number[]=[];
  preostaliDani:number[]=[];
  null:boolean;


  vratiSe(){
   if(this.kor.tip=='moder'){
    this.ruter.navigate(['moder'])
   }
   else if(this.kor.tip=='citalac'){
    this.ruter.navigate(['citalac'])
   }
   else {this.ruter.navigate(['admin'])}
  }

  produzi(k){
    console.log(k.produzio)
      if(k.produzio==0){
        console.log("usao")
        this.produzen=false;
        this.knjigaServis.produziRok(k.idk,2*this.daniVrac[0],1).subscribe((resp)=>{
          if(resp["poruka"]=='ok'){
           
            this.poruka="Rok uspesno produzen."
            for(let i=0; i<this.zaduzeneKnjige.length; i++){
              if(this.zaduzeneKnjige[i].idk==k.idk){
                this.preostaliDani[i]=this.daniVrac[0]+this.preostaliDani[i];
              }
            }
          }
        })
      }
      else {
        this.produzen=true;
        this.poruka="Korisnik je vec jednom produzio rok vracanja."
      }
    }

  vrati(n){
    var danass=new Date();
    var dan=String(this.danas.getDate()).padStart(2, '0');
    var mesec=String(this.danas.getMonth()+1).padStart(2, '0');
    var godina=this.danas.getFullYear();
    var stringD=dan+"-"+mesec+"-"+godina;
    this.korisnikServis.vrati(n, stringD).subscribe(res=>{
    
      this.ngOnInit();
      this.ruter.navigate(['zaduzene'])
    });
  
  }

  detalji(idKnjige){
    this.ruter.navigate(['knjigadetalji']);
  }
}
