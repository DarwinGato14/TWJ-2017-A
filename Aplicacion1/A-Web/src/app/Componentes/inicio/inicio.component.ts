import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre: string = "valor";

  arregloUsuario = [
    {
      nombre: "Darwin",
      apellido: "Morocho"
    },
    {
      nombre: "Laydy",
      apellido: "Medina"
    },
    {
      nombre: "Pedro",
      apellido: "Perez"
    },
    {
      nombre: "Marco",
      apellido: "Sevillano"
    },
  ]

  constructor() {
  }

  ngOnInit() {
  }

  goToCambiar() {
    this.nombre = "Este es el valor cambiado";

  }

  goToOnblour() {
    this.nombre = "Cambiar onBlour";

  }

  cambiarNombreInput(nombreEtiqueta) {

    console.log("Valor de la vista ", nombreEtiqueta.value())
    this.nombre = nombreEtiqueta.value();
  }

}
