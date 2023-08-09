import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Microservice{
  private baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  enviarEncuesta( genero: string, email: string): Observable<any> {
    const url = `${this.baseUrl}genero`;
    const data = { email, genero };
    return this.http.post(url, data);
  }

  verificarEmailExistente(email: string) {
    return this.http.get<boolean>(`${this.baseUrl}verificaremail?email=${email}`);
  }

  obtenerConteoGeneros(): Observable<any[]> {
    const url = `${this.baseUrl}conteo`; 
    return this.http.get<any[]>(url);
  }
}
