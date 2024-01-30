import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  api='http://localhost:3000'

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get (`${this.api}/login`) 
  } 
  }
  
