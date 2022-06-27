import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CountryApiService {

  constructor(public http:HttpClient) { }

  getCountry(name){
    return this.http.get("https://restcountries.com/v3.1/name/"+name);
  }
}
