import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SbChamps } from './SbChamps';

@Injectable({
  providedIn: 'root'
})
export class SuperBowlService {
  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/superbowlchampions'

  //Pegar todos os campeões
  getChamps(): Observable<SbChamps[]>{
    return this.http.get<SbChamps[]>(this.url);
  }

  //Pegar campeões pelo Id
  getChampsById(id: number): Observable<SbChamps>{
    return this.http.get<SbChamps>(`${this.url}/${id}`);
  }

  //Cadastrar novos campeões
  saveNewChamps(sbnew: SbChamps): Observable<SbChamps>{
    return this.http.post<SbChamps>(this.url, sbnew);
  }

  //Alterar erros possiveis nos campeões cadastrados
  updateInfoChamps(sbalt: SbChamps): Observable<SbChamps>{
    return this.http.put<SbChamps>(`${this.url}/${sbalt.id}`, sbalt);
  }

  //Deletar da lista
  deleteWrongChamps(sbdel: SbChamps): Observable<void>{
    return this.http.delete<void>(`${this.url}/${sbdel.id}`);
  }
}
