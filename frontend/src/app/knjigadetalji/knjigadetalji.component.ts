import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { min } from 'rxjs';
import { KnjigaService } from '../knjiga.service';
import { KomService } from '../kom.service';
import { KorisnikService } from '../korisnik.service';
import { Knjiga } from '../model/knjiga';
import { Komentar } from '../model/komentar';
import { Korisnik } from '../model/korisnik';
import { Zaduzene } from '../model/zaduzene';

@Component({
  selector: 'app-knjigadetalji',
  templateUrl: './knjigadetalji.component.html',
  styleUrls: ['./knjigadetalji.component.css',  '../login/login.component.css']
})
export class KnjigadetaljiComponent implements OnInit {

  constructor(private knjigaServis:KnjigaService, private ruter:Router, private ruta:ActivatedRoute, private korisnikServis:KorisnikService, private komServis:KomService) { }

  ngOnInit(): void {
    this.prosecna=0;
    this.srednjaocena=0; 
    this.max=10;
    this.isReadonly=false;
    this.pretrazene=false;
    this.kor=JSON.parse(localStorage.getItem('ulogovan'));
    if(this.kor==null){
       this.ruter.navigate(['login'])
    }

    var danas=new Date();
    var dan=String(danas.getDate()).padStart(2, '0');
    var mesec=String(danas.getMonth()+1).padStart(2, '0');
    var godina=danas.getFullYear();
    this.datumString=dan +"-" + mesec + "-" + godina;

    this.pomocna=JSON.parse(localStorage.getItem('zaduz'));
    if(this.pomocna==null){
      this.zad=false;
    }
    else {
      console.log(this.pomocna.idk)
      this.knjigaServis.dohvatiKnjigu(this.pomocna.idk).subscribe((knj:Knjiga)=>{
        this.zaduzena=knj;
         this.zad=true;
        this.pretrazene=false;
       this.komServis.dohvatiSve(knj.idKnj).subscribe((kom:Komentar[])=>{
        this.komentari=kom;
        if(this.komentari.length==0){
          this.porukakom="Knjiga nije ocenjena, niti ima komentara."
        }
        else {
          for(let i=0; i<kom.length; i++){
            this.srednjaocena+=kom[i].ocena;
         }
         this.prosecna=this.srednjaocena/kom.length;
         this.knjigaServis.postaviOcenu(this.zaduzena.idKnj, this.prosecna).subscribe((resp)=>{
          if(resp["poruka"]=='ok'){
            console.log("Uspesno dodao prosecnu ocenu.")
          }
        })
        }
       })
      })
    
    }

    this.knjig=JSON.parse(localStorage.getItem('pretraz'));
   
    if(this.knjig!=null){
       console.log('dohvatam knjigu')
       this.zad=false;
       this.pretrazene=true;
        this.komServis.dohvatiSve(this.knjig.idKnj).subscribe((kom:Komentar[])=>{
          this.komentari=kom;
          if(this.komentari.length==0){
             this.porukakom="Knjiga nema komentara, niti je ocenjena."
             console.log('nema komentara')
          }
          for(let i=0; i<kom.length; i++){
             this.srednjaocena+=kom[i].ocena;
          }
          this.prosecna=this.srednjaocena/kom.length;
          this.knjigaServis.postaviOcenu(this.knjig.idKnj, this.prosecna).subscribe((resp)=>{
            if(resp["poruka"]=='ok'){
              console.log("Uspesno dodao prosecnu ocenu.")
            }
          })
      })
      }


 
    this.knjigaServis.dohvatiZaduzeenSve().subscribe((knj:Zaduzene[])=>{
      this.svezaduz=knj;
     
    }) 
  }
  

  
  srednjaocena:number;
  prosecna:number;

  pomocna:Zaduzene;

  kor:Korisnik;
  poruka:string;
  pretrazene:boolean;
  knjig:Knjiga;
  zaduzena:Knjiga;
  zad:boolean;
  datumString:string;
  zaduzeneKnjige:Zaduzene[]=[]
  datumZaduz:string[]=[];
  stringDatum:Date[]=[];
  preostaliDani:number[]=[];
  svezaduz:Zaduzene[]=[]
  dani:number;
  brojNeRazd:number;

  vratiSe(){
    localStorage.removeItem('pretraz')
    localStorage.removeItem('zaduz')
    if(this.kor.tip=='citalac')
    this.ruter.navigate(['citalac'])
    else if(this.kor.tip=='moder') {
      this.ruter.navigate(['moder'])
    }
    else if (this.kor.tip=='admin'){
      this.ruter.navigate(['admin'])
    }
  }

  zaduzi(){
    this.korisnikServis.dohvatiZaduzene(this.kor.korisnicko_ime).subscribe((knj:Zaduzene[])=>{
      this.brojNeRazd=0;
      for(let i=0; i<knj.length; i++){
        if(knj[i].datumVrac==null){
          this.brojNeRazd++;
        }
      }
      for(let i=0; i<knj.length; i++){
        console.log("eheeheeheh")
        if(knj[i].datumVrac!=null){
          continue;
        }
      
        var danas=new Date();
      this.datumZaduz[i]=knj[i].datumZad;
      this.dani=JSON.parse(localStorage.getItem('dan'));
      const [day, month, year] = knj[i].datumZad.split('-');
      this.stringDatum[i]= new Date(+year, +month - 1, +day);
      this.preostaliDani[i]=knj[i].dani-Math.floor((Date.UTC(danas.getFullYear(), danas.getMonth(), danas.getDate()) - Date.UTC(this.stringDatum[i].getFullYear(), this.stringDatum
      [i].getMonth(), this.stringDatum[i].getDate()) ) /(1000 * 60 * 60 * 24));
      if(this.preostaliDani[i]<0){
       
        this.poruka="Korisnik nije vratio sve zaduzene knjige u dogovorenom roku!";
        return;
      } 
      else if(this.brojNeRazd>2){
        this.poruka="Korisnik nema prava da zaduzi knjigu, jer je ispunio maksimalan broj zaduzenih knjiga.";
        return;
      }

      }
        if(this.knjig.brojKnjiga<0){
          this.poruka="Nema dovoljno knjiga na stanju."
          return;
        }
          let id=this.knjig.idKnj;
          console.log(this.svezaduz.length+1)
          this.knjigaServis.zaduziKnj(this.knjig.naziv, this.knjig.pisac, this.kor.korisnicko_ime, this.datumString, null, this.dani, id, 0, "", 0,this.knjig.img).subscribe((resp)=>{
            if(resp['poruka']='ok'){
              this.knjigaServis.azurirajUiB(this.knjig.idKnj, this.knjig.brojKnjiga-1, this.knjig.uzeta+1).subscribe((resp)=>{
                if(resp['poruka']='ok'){
                  localStorage.setItem('zaduzio', JSON.stringify(this.knjig))
                  console.log('umanjio')
                }
              })
           //   this.knjig.uzeta++;
             // this.knjig.brojKnjiga--;
              this.ruter.navigate(['pretraga'])
            }
          })
         
        }) 
  }

  komentari:Komentar[]=[]
  porukakom:string;
  ocena:number;
  komm:string;
  max:number;
  isReadonly:boolean;
  ocene: number[] =[1,2,3,4,5,6,7,8,9,10]
  izabranaO:number;
  prebroji(ocenaa){
    this.izabranaO=ocenaa;
  }

 
  
  ostavi(k){
    var danas=new Date();
    var dan=String(danas.getDate()).padStart(2, '0');
    var mesec=String(danas.getMonth()+1).padStart(2, '0');
    var godina=danas.getFullYear();
    var sat=danas.getHours();
    var minuti=danas.getMinutes();
    var sekundi=danas.getSeconds();

    var stringDat=dan + "-" + mesec + "-" + godina + " " +sat +":"+minuti + ":" + sekundi;
   this.komServis.postoji(k.idKnj, this.kor.korisnicko_ime).subscribe((kom:Komentar)=>{
    if(kom!=null){
      this.porukakom="Korisnik je vec dodao komentar."
      return;
    } 
    if(this.ocena>10 || this.ocena<1){
      this.porukakom="Ocena mora biti u opsegu od 1 do 10"
      return;
    }
   this.komServis.dodajKom(k.idKnj, this.kor.korisnicko_ime, this.ocena, this.komm, stringDat).subscribe((resp)=>{
    if(resp["poruka"]=='ok'){
      this.porukakom="Uspesno dodat komentar."
    }
   })
   })
  }
   
  pocetna(){
    localStorage.removeItem('zaduz')
    localStorage.removeItem('pretraz')
    this.ruter.navigate([''])
  }
 
}
