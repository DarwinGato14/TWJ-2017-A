import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url:string="https://angularjs.org/";
  title:string;
  usuario:IUsuario={
    nombre:"Darwin",
    apellido:"Morocho"
  }
  constructor(){
    this.holaMundo();
    console.log("entra al constructor");
  }

  holaMundo(){
    console.log("hola angular"+this.title)
  }
}

interface IUsuario{
  nombre:string,
  apellido:string
}
