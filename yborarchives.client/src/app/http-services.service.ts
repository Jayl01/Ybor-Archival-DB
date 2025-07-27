import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServices{

  constructor(private http:HttpClient) { }

  fetch_artifact() : Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/");
  }
}
