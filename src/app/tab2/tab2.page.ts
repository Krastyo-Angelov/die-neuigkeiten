import { Component, OnInit } from '@angular/core';
import { CountryApiService } from '../services/country-api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public countryName:any;
  public countryData:any;
  constructor(public api2:CountryApiService) {}

  // ngOnInit(){
  //   this.api2.getCountry().subscribe((results) => {
  //     console.log(results);
  //     this.countryData = results;
  //   });
  // }

  searchCountry(){
    this.api2.getCountry(this.countryName).subscribe(result =>{
      console.log(result);
      this.countryData=result;
    });
  }
}
