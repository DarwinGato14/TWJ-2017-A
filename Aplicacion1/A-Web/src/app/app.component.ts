import { Component } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  parrafo:string="Este es un parrafo";
  colorBack:string="red";

  url:string="https://angularjs.org/";
  title:string;
  usuario:IUsuario={
    nombre:"",
    apellido:"Morocho"
  }
  constructor(){
    this.parrafo="Este es un parrafo";
    setTimeout(()=>{
      this.usuario.nombre="Darwin"
    }, 3000);

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
