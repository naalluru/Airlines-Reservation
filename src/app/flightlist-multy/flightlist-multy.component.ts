import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Airport } from '../models/airport.info';




@Component({
  selector: 'app-flightlist-multy',
  templateUrl: './flightlist-multy.component.html',
  styleUrls: ['./flightlist-multy.component.scss']
})
export class FlightlistMultyComponent implements OnInit {
  roundtripenabled: boolean = false;
  airports: Airport[];
  originList: Airport[];
  destinationList: Airport[];
  departItem:Airport;
  arrivalItem:Airport;
  model: any = {};

  
  
  ngOnInit() {
    
  }
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
     
      this.airports=data;
      this.originList=this.airports.sort((a,b)=>a.city.trim()>b.city.trim()?1:-1);
      this.destinationList=this.airports.sort((a,b)=>a.city.trim()>b.city.trim()?1:-1);
      
    });
}
  public getJSON(): Observable<any> {
    return this.http.get("../../assets/airports.json");
}

searchFlights(){
console.log(this.model.type);
}
  myClickFunction(value:String) { 
    if(value=="ROUND-TRIP"){
    this.roundtripenabled=true;
  }else{
    this.roundtripenabled=false;
  }
 }
}
