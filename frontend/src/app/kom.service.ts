import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KomService {

  constructor(private http:HttpClient) { }

  uri='http://localhost:4000';

  dodajKom(idkForma, ostavioForma,ocenaForma, komForma, datumForma ){
    const data={
      idk:idkForma,
      ostavio:ostavioForma,
      ocena:ocenaForma,
      kom:komForma,
      datum:datumForma
    }
    return this.http.post(`${this.uri}/komentar/dodajKomentar`, data)
  }

  dohvatiSve(idkForma){
    const data={
      idk:idkForma
    }
    return this.http.post(`${this.uri}/komentar/dohvati`,data)
  }
  postoji(idkForma, korForma){
    const data={
      idk:idkForma,
      ostavio:korForma
    }
    return this.http.post(`${this.uri}/komentar/postoji`, data)
  }
}
