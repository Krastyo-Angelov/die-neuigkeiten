import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  public apiKey:any="334450de60c0487fa2620112f3abcd0b";

  constructor(public http:HttpClient) { }

  getNew(article){
    return this.http.get("https://newsapi.org/v2/everything?q="+article+"&from=2022-05-27&sortBy=publishedAt&apiKey="+this.apiKey);
  }
}
