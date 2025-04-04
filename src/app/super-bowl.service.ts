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

  getChamps(): Observable<SbChamps[]>{
    return this.http.get<SbChamps[]>(this.url);
  }
}
