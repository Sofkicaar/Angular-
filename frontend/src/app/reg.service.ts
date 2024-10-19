import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private http:HttpClient) { }

  uri='http://localhost:4000';

  zahtev(imeForm, prezimeForm, korisnickoimeForm, lozinkaForm, adresaForm, kontaktForm, imejlForm, imgForm, tipForm, prihvatiForm, blokiranForm){
    const data={
      ime:imeForm,
      prezime:prezimeForm,
      korisnicko_ime:korisnickoimeForm,
      lozinka:lozinkaForm,
      imejl:imejlForm,
      adresa:adresaForm,
      kontakt:kontaktForm,
      img: imgForm,
      tip: tipForm,
      prihvati:prihvatiForm,
      blokiran:blokiranForm
    }
    return this.http.post(`${this.uri}/registracija/zahtev`, data)
  }
  dohvati(){
    return this.http.get(`${this.uri}/registracija/dohvatiZahteve`)
  }
  odbijZ(korIme){
    const data={
      korisnicko_ime:korIme
    }
    return this.http.post(`${this.uri}/registracija/odbij`, data)
  }

  mejl(imejlForma){
    const data={
      imejl:imejlForma
    }
    return this.http.post(`${this.uri}/registracija/dohvatiMejl`, data)
  }
  korIme(korImeForma){
    const data={
      korisnicko_ime:korImeForma
    }
    return this.http.post(`${this.uri}/registracija/dohvatiKorisnickoIme`, data)
  }
  postaviP(korIme, prihvatiF){
    const data={
      korisnicko_ime:korIme,
      prihvati:prihvatiF
    }
    return this.http.post(`${this.uri}/registracija/postavi`, data)
  }
}
