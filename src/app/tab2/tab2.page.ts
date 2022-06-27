import { Component, OnInit } from '@angular/core';
import { CountryApiService } from '../services/country-api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public countryName:any;
  public countryNameShow:any;
  public countryPopulation:any;
  public countryCapitalCity:any;
  public countryGeoLoc:any;
  public countryArea:any;
  public countryCont:any;
  constructor(public api2:CountryApiService) {}

  searchCountry(){
    this.api2.getCountry(this.countryName).subscribe(result =>{
      console.log(result);
      this.countryNameShow=result[0]['name']['official'];
      this.countryCapitalCity="Hauptstadt: " + result[0]['capital'][0];
      this.countryPopulation= "Bevölkerung:" + " " + result[0]['population'] + " " + "Menschen";
      this.countryArea= "Fläche:" + " " + result[0]['area'] + " " + "km²";
      this.countryCont="Region: " + result[0]['region'];
      this.countryGeoLoc= "Position:" + " " + result[0]['latlng'] + " " + "Breite,Länge";
    });
  }
}
