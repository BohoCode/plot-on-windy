import { Component, OnInit } from '@angular/core';
import { gLocation } from '../gLocation';

@Component({
  selector: 'app-deg-min-input',
  templateUrl: './deg-min-input.component.html',
  styleUrls: ['./deg-min-input.component.css']
})
export class DegMinInputComponent implements OnInit {

  windyUrl="https://www.windy.com/-40.525/115.323?gfs,-41.470,115.323,7,m:cxCajnn";
 
  loc : gLocation;

  constructor() { 
    this.loc =  new gLocation("40° 32.35 S, 115° 14.68 E");
  };


  ngOnInit() {
  };

}
