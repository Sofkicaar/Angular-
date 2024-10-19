import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }
  uri='http://localhost:4000';


  login(korisnicko_imeIzForme, lozinkaIzForme){
    const data={
      korisnicko_ime: korisnicko_imeIzForme,
      lozinka:lozinkaIzForme
    }
  
    return this.http.post(`${this.uri}/korisnik/login`, data)
  }
  registracija(imeForm, prezimeForm, korisnickoimeForm, lozinkaForm, adresaForm, kontaktForm, imejlForm, imgForm, tipForm, blokiranForm){
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
      blokiran:blokiranForm
    }
    return this.http.post(`${this.uri}/korisnik/registracija`, data)
  }

  dohvatiKorisnickoIme(korisnicko_imeForma){
    const data={
      korisnicko_ime:korisnicko_imeForma
    }
    return this.http.post(`${this.uri}/korisnik/dohvatiKorisnickoIme`, data)
  }

  dohvatiMejl(imejlForma){
    const data={
      imejl:imejlForma
    }
    return this.http.post(`${this.uri}/korisnik/dohvatiMejl`, data)
  }

  dohvatiKorisnika(imeForma, prezimeForma, imejlForma, adresaForma, kontaktForma){
    const data={
      ime:imeForma,
      prezime:prezimeForma,
      imejl:imejlForma,
      adresa:adresaForma, 
      kontakt:kontaktForma
    }
    return this.http.post(`${this.uri}/korisnik/dohvatiKorisnika`, data)
  }

 dohvatiZaduzene(korisnickoForma){
const data={
  korisnicko_ime:korisnickoForma
}
return this.http.post(`${this.uri}/korisnik/dohvatiZaduzene`, data)
 }

 vrati(k, datumForm){
  const data={
    idk:k,
    datumVrac:datumForm,
   
  }
  return this.http.post(`${this.uri}/korisnik/vrati`, data)
 }

 dohvatiDane(korisnickoForma){
  const data={
    korisnicko_ime:korisnickoForma
  }
  return this.http.post(`${this.uri}/korisnik/dohvatiDane`, data)
 }
 dohvatiDatum(korisnickoForma){
  const data={
    korisnicko_ime:korisnickoForma
  }
  return this.http.post(`${this.uri}/korisnik/dohvatiDatum`, data)
 }

 obrisiKorisnika(korImeForma){
  const data={
    korisnicko_ime:korImeForma
  }
  return this.http.post(`${this.uri}/korisnik/obrisiKorisnika`, data)
 }

 dohvatiSve(){
  return this.http.get(`${this.uri}/korisnik/dohvatiSveKor`)
 }

 azuriraj(korForma,imeForma, prezimeForma,adresaForma, kontaktForma, tipForma, slikaForma){
  const data={

    korisnicko_ime:korForma,
   
    ime:imeForma,
    prezime:prezimeForma,
    
    adresa:adresaForma,
    kontakt:kontaktForma,
    tip:tipForma,
    img:slikaForma
  }
  return this.http.post(`${this.uri}/korisnik/azuriraj`,data)
 }
 azurirajSve(korForma,imeForma, prezimeForma,lozinkaForma,adresaForma, kontaktForma,imejlForma, tipForma, slikaForma){
  const data={

    korisnicko_ime:korForma,
    ime:imeForma,
    prezime:prezimeForma,
    lozinka:lozinkaForma,
    adresa:adresaForma,
    kontakt:kontaktForma,
    imejl:imejlForma,
    tip:tipForma,
    img:slikaForma
  }
  return this.http.post(`${this.uri}/korisnik/azurirajSve`,data)
 }

 pretraziKorisnika(searchParam){
  return this.http.get(`${this.uri}/korisnik/pretraziKor?param=${searchParam}`)
 }
 promeniLoz(loz1,loz2){
  const data={
    loz1:loz1,
    loz2:loz2
  }
  return this.http.post(`${this.uri}/korisnik/promeniLozinku`, data);
}

promeniPr(korime, tipForma){
  const data={
    korisnicko_ime:korime,
    tip:tipForma
  }
  return this.http.post(`${this.uri}/korisnik/promeniPriv`, data)
}

blokirajKor(korFrma, blokForma){
  const data={
    korisnicko_ime:korFrma,
    blokiran:blokForma
  }
  return this.http.post(`${this.uri}/korisnik/blokiraj`, data)
}

}
