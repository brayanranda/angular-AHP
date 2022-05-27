import * as global from 'global'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProblemService {
  url=`${global.url}/problema/`;
  user=`${global.url}/usuario/usuarioPorEmail/`;
  constructor(private http: HttpClient) { }

  public getProblems():Observable<any>{
    return this.http.get<any>(this.url);
  }

  public getProblemsUser(email:string):Observable<any>{
    return this.http.get<any>(`${global.url}/usuario/problemas/`+email);
  }

  public getUser(email:string):Observable<any> {
    return this.http.get<any>(this.user+email);
  }

  public post(problema:any):Observable<any>{
    return this.http.post<any>(this.url, problema)
  }

  editProblem(id:string,problema:any):Observable<any>{
    return this.http.put(this.url,problema)
  }

  getProblem(id:string): Observable<any>{
    return this.http.get(this.url+id)
  }

  deleteProblem(token:string):Observable<any>{
    return this.http.delete(this.url+token)
  }
  activateProblem(token:string):Observable<any>{
    return this.http.get(this.url+token+"/activar")
  }
  
}