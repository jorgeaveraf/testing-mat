import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinearRegressionService {
  private apiBaseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getTestData1(): Observable<number[]> {
    const url = `${this.apiBaseURL}/3a_test1.json`; // Asegúrate de agregar la extensión .json
    return this.http.get<number[]>(url);
  }

  getTestData2(): Observable<number[]> {
    const url = `${this.apiBaseURL}/3a_test2.json`; // Asegúrate de agregar la extensión .json
    return this.http.get<number[]>(url);
  }

  getTestData3(): Observable<number[]> {
    const url = `${this.apiBaseURL}/3a_test3.json`; // Asegúrate de agregar la extensión .json
    return this.http.get<number[]>(url);
  }

  getTestData4(): Observable<number[]> {
    const url = `${this.apiBaseURL}/3a_test4.json`; // Asegúrate de agregar la extensión .json
    return this.http.get<number[]>(url);
  }
}
