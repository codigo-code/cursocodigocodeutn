import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumoapiService {

  // consumimos el api de internet ( de nuestro localhost)
  constructor(private http: HttpClient) { }

  public getAllPersonas() {
    return this.http.get('http://localhost:8080/getAllPersonas');
    // de alguna manera consumir un api de java--->
  }

  public getPersonaById(id) {
    return this.http.get('http://localhost:8080/persona/' + id);
  }
}
