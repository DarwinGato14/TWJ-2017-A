import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { HttpModule } from '@angular/http';
import {IEquipo} from "../Interfaces/IEquipo";
import {ClsEquipo} from "../Clases/ClsEquipo";
import 'rxjs/add/operator/map';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {


  equipos: IEquipo[] = [];
  nuevoEquipo: ClsEquipo = new ClsEquipo();
  constructor( private _http: Http ) { }

  ngOnInit() {
    console.log( 'Nuevo equipo', this.nuevoEquipo );
    this.cargarEquipos();
  }

  cargarEquipos(){
    this._http
      .get('http://localhost:1338/Equipo/')
      .subscribe(
        (response) => {
          console.log('Response:', response);

          console.log(response.json());

          const respuesta = response.json();

          console.log(respuesta.next);

          this.equipos = respuesta;


        },
        (error) => {
          console.log('Error:', error);
        },
        () => {
          console.log('Finally');
        }

      );
  }
  crearEquipo(){
    console.log('Entro a crear Usuario');

    /*  let usuario = {
     nombre:this.nuevoUsuario.nombre
     };
     */


    this._http.post('http://localhost:1338/Equipo/', this.nuevoEquipo)
      .subscribe(
        respuesta => {
          // const respuestaJSON = respuesta.json();
          // console.log('Resouesta JSoN', respuestaJSON);
          //this.usuarios.push(this.nuevoUsuario);

          //this.usuarios.splice(respuesta.json());
          let usuarioAgregado;
          usuarioAgregado = respuesta.json();

          this.equipos.push(usuarioAgregado);
          this.nuevoEquipo={};


        },
        error => {
          console.log('Error', error);
        }
      );

  }

}
