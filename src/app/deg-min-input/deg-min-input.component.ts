import { Component, OnInit } from '@angular/core';
import { gLocation } from '../gLocation';

@Component({
  selector: 'app-deg-min-input',
  templateUrl: './deg-min-input.component.html',
  styleUrls: ['./deg-min-input.component.css']
})
export class DegMinInputComponent implements OnInit {
 
  loc : gLocation;

  constructor() { 
    this.loc =  new gLocation();
  };

  ngOnInit() {
  };

}
