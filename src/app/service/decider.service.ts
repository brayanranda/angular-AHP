import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as global from 'global'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeciderService {

  constructor(private httpClient: HttpClient) { }

  url = `${global.url}/decisor/`;

  public getAllDecider(): Observable<any>{
    return this.httpClient.get<any>(this.url);
  }
  public getAllDeciderByUser(email:string): Observable<any>{
    return this.httpClient.get<any>(this.url+"usuario/"+email);
  }
  public getAllDeciderByProblem(idProblema:string): Observable<any>{
    return this.httpClient.get<any>(this.url+idProblema);
  }
  public saveDeciderByProblem(decisor:any): Observable<any>{
    return this.httpClient.post<any>(this.url, decisor);
  }


}
