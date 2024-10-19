import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KnjigaService {

  constructor(private http:HttpClient) { }
  uri='http://localhost:4000'

  dohvatiKnjige(){
    return this.http.get(`${this.uri}/knjiga/dohvatiKnjige`)
  }

  pretraziKnjiguNaziv(searchParam1){
    return this.http.get(`${this.uri}/knjiga/pretraziKnjiguNaziv?param=${searchParam1}`)
  }
  pretraziIz(searchParam){
    return this.http.get(`${this.uri}/knjiga/pretraziIzdavac?param=${searchParam}`)
  }
 
  dohvatiKnjigu(idKnjige){
    const podaci={
      idk:idKnjige 
    }
    return this.http.post(`${this.uri}/knjiga/dohvatiKnjigu`, podaci)
  }

  dodajKnj(nazivForma, pisacForma, uzetaForma, zanrForma, godinaIzdavanjaForma, izdavacForma, jezikForma, idKnjForma, brojKnjigaForma, slikaForma, ocenaForma){
     
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
     ocena:ocenaForma
    }
    return this.http.post(`${this.uri}/knjiga/dodajKnjigu`, data)
}

zaduziKnj(nazivForma, autorForma, zaduziForma, datumZadForma, datumVracForma, daniForma, idkForma, ocenaForma, komentarForma,produzioForma, slikaForma){
  const data={
    naziv:nazivForma,
    autor:autorForma,
    zaduzio:zaduziForma,
    datumZad:datumZadForma,
    datumVrac:datumVracForma,
    dani:daniForma,
    idk:idkForma,
    ocena:ocenaForma,
    komentar:komentarForma,
    produzio:produzioForma,
    slika:slikaForma
  }
  return this.http.post(`${this.uri}/zaduzene/zaduziKnjigu`,data)
}
azuriraj(idKForma,nazivForma, autorForma, godinaForma, zanrForma, jezikForma, izdavacForma,brojForma, slikaForma){
  const data={
    idKnj:idKForma,
    naziv:nazivForma,
    pisac:autorForma,
    godinaIzdavanja:godinaForma,
    zanr:zanrForma,
    jezik:jezikForma,
    izdavac:izdavacForma,
    brojKnjiga:brojForma,
    img:slikaForma
  }
  return this.http.post(`${this.uri}/knjiga/azuriraj`, data)
}

dohvatiZaduzeenSve(){
  return this.http.get(`${this.uri}/zaduzene/dohvatiSveZaduzene`)
}

obrisiKnjigu(idkForma){
  const data={
    idKnj:idkForma
  }
  return this.http.post(`${this.uri}/knjiga/obrisiKnjigu`, data)
}

dohvatiNazivZad(nazivForma){
  const data={
    naziv:nazivForma
  }
  return this.http.post(`${this.uri}/zaduzene/dohvatiKnjNaziv`, data)
}

azurirajId(nazivForma, idkForma){

  const data={
    naziv:nazivForma,
    idKnj:idkForma
  }
  return this.http.post(`${this.uri}/knjiga/azurirajId`, data)
}

azurirajUiB(idkForma, brojForma, uzetaForma){
  const data={
    idKnj:idkForma,
    brojKnjiga:brojForma,
    uzeta:uzetaForma
  }
  return this.http.post(`${this.uri}/knjiga/azurirajUiBr`, data)
}

produziRok(idkForma, daniForma, produziForma){
  const data={
    idk:idkForma,
    dani:daniForma,
    produzio:produziForma
  }
  return this.http.post(`${this.uri}/zaduzene/produzi`, data)
}

postaviOcenu(idkForma, ocenaForma){
  const data={
    idKnj:idkForma,
    ocena:ocenaForma
  }
  return this.http.post(`${this.uri}/knjiga/postaviProsecnu`, data)
}

}

