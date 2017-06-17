import {Component, OnInit} from '@angular/core';

import {Http} from '@angular/http';
import {HttpModule} from '@angular/http';
import {LocationClass} from "../Clases/LocationClass";

import 'rxjs/add/operator/map';
import {FormsModule}   from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locations: LocationClass[] = [new LocationClass()];
  constructor(private _http: Http) {
  }

  ngOnInit() {
    this.cargarLocation();
  }

  cargarLocation(){
    this._http
      .get('http://dts.location-world.com/api/fleet/odometers?token=0A39D788545F41A4A22AD076BC2F3B2A&time_zone_offset=-5')
      .subscribe(
        (response) => {
          console.log('Response:', response);

          console.log(response.json());

          const respuesta = response. json()[0];

          console.log(respuesta.next);

          this.locations = respuesta;


        },
        (error) => {
          console.log('Error:', error);
        },
        () => {
          console.log('Finally');
        }

      );
  }

}
