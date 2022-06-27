import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public theme:any;
  public newsData:any;
  constructor(public api1:NewsApiService) {}

  search(){
    this.api1.getNew(this.theme).subscribe(result => {
      console.log(result);
      this.newsData=result['articles'];
    });
  }
}
