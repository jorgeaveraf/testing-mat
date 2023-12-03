import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediasService {
  private apiURLProxySize = 'https://api-node-service-danielaaer.cloud.okteto.net/proxy';
  private apiUrlDevHours = 'https://api-node-service-danielaaer.cloud.okteto.net/dev';

  errorMessage: any= '';

  constructor(private http: HttpClient) { }

  getProxySize(): Observable<{ data: number[] }> {
    // Return an observable of the local array arr
    return of({ data: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503] });
  }
  
  getDevHours(): Observable<{ data: number[] }> {
    // Return an observable of the local array arr2
    return of({ data: [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] });
  }
  
  
  handleError = (error: any) => {
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      this.errorMessage = error.error.message;
    } else {
      // Get server-side error
      this.errorMessage = `Error code: ${error.status}\n Message: ${error.message}`;
    }
  
    window.alert(this.errorMessage);
    return throwError(this.errorMessage);
  }
}  