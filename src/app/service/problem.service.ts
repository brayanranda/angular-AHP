import * as global from 'global'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProblemService {
  url=`${global.url}/problema/`;
  constructor(private http: HttpClient) { }

  public getProblems():Observable<any>{
    return this.http.get<any>(this.url);
  }

  public post(problema:any):Observable<any>{
    return this.http.post<any>(this.url, problema)
  }

  editProblem(id:string,problema:any):Observable<any>{
      return this.http.put(`${global.url}/problema`,problema)
  }

  getProblem(id:string): Observable<any>{
    return this.http.get(this.url+id)
  }
  
}