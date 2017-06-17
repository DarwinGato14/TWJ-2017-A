import {Component, OnInit, Input} from '@angular/core';
import {LocationClass} from "../Clases/LocationClass";

@Component({
  selector: 'app-locationinput',
  templateUrl: './locationinput.component.html',
  styleUrls: ['./locationinput.component.css']
})
export class LocationinputComponent implements OnInit {
  @Input() location: LocationClass= new  LocationClass();

  constructor() {
  }

  ngOnInit() {
  }

}
