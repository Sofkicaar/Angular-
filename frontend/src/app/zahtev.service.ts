import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZahtevService {

  constructor(private http:HttpClient) { }


  uri='http://localhost:4000';


  dohvatiSve(){
    return this.http.get(`${this.uri}/zahtevi/dohvatiSve`);
  }
  postavi(idkForma, prihvatiForma){
    const data={
      idKnj:idkForma,
      prihvati:prihvatiForma
    }
    return this.http.post(`${this.uri}/zahtevi/postavi`, data)
  }
 
  dohvatiId(idkForma){
    const data={
      idKnj:idkForma
    }
    return this.http.post(`${this.uri}/zahtevi/dohvId`, data)
  }

  dodajKnjigu(nazivForma, pisacForma, uzetaForma, zanrForma, godinaIzdavanjaForma, izdavacForma, jezikForma, idKnjForma, brojKnjigaForma, slikaForma, prihvatiForma, ocenaForma){
    const data={
      naziv: nazivForma,
      pisac: pisacForma,
      uzeta: uzetaForma,
      zanr: zanrForma,
      godinaIzdavanja: godinaIzdavanjaForma,
      izdavac: izdavacForma,
      jezik: jezikForma,
      idKnj: idKnjForma,
      
      brojKnjiga: brojKnjigaForma,
     
      img: slikaForma,
      prihvati:prihvatiForma,
      ocena:ocenaForma
     }
     return this.http.post(`${this.uri}/zahtevi/dodajKnj`, data)
  }

  odbij(idkFroma){
     const data={
      idKnj:idkFroma
     }
     return this.http.post(`${this.uri}/zahtevi/odbij`, data)
  }
}
