import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KnjigaService } from '../knjiga.service';
import { Knjiga } from '../model/knjiga';
import { Zaduzene } from '../model/zaduzene';

@Component({
  selector: 'app-brisiknj',
  templateUrl: './brisiknj.component.html',
  styleUrls: ['./brisiknj.component.css', '../login/login.component.css']
})
export class BrisiknjComponent implements OnInit {

  constructor(private knjigaServis:KnjigaService, private ruter:Router) { }

  ngOnInit(): void {

    this.knjigaServis.dohvatiKnjige().subscribe((knj:Knjiga[])=>{
      this.knjige=knj;
      this.knjige.sort((knjiga1, knjiga2)=>{
        return knjiga1.idKnj>=knjiga2.idKnj? 1:-1
      })
    })

    
  }

  knjige:Knjiga[]=[]
  poruka:string;
 // zaduzena:Zaduzene[];
 zaduzena:boolean;
  

  obrisi(idk){
    this.zaduzena=true;
    let j=0;
    for(let i=0; i<this.knjige.length; i++){
    
     console.log(j)
      if(this.knjige[i].idKnj==idk){
        j=i;
        console.log(this.knjige[i].naziv)
      this.knjigaServis.dohvatiNazivZad(this.knjige[i].naziv).subscribe((knj:Zaduzene[])=>{
          this.zaduzena=false;
      
      })
      break;
    }
    }

    if(this.zaduzena){
      this.knjigaServis.obrisiKnjigu(idk).subscribe((resp)=>{
      if(resp["poruka"]=="ok"){
         this.poruka="Uspesno obrisana"
       for(let k=j+1; k<this.knjige.length; k++){

          console.log(this.knjige[k].naziv)
          this.knjigaServis.azurirajId(this.knjige[k].naziv, this.knjige[k].idKnj-1).subscribe((resp)=>{
           
            if(resp['poruka']=='ok'){
              this.poruka="Uspesno azurirani"
            }
          })
          console.log("da menjam id")
       }
      
      }
    })
  }
  else {
    this.poruka="Knjiga nije razduzena i ne moze biti obrisana!"
  }
  }
  pocetna(){
    this.ruter.navigate([''])
  }

  vratiSe(){
    this.ruter.navigate(['admin'])
  }
}
