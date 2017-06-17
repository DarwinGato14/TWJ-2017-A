import {Component, OnInit, Input} from '@angular/core';
import {IEquipo} from "../Interfaces/IEquipo";
import {ClsEquipo} from "../Clases/ClsEquipo";

@Component({
  selector: 'app-equipoc',
  templateUrl: './equipoc.component.html',
  styleUrls: ['./equipoc.component.css']
})
export class EquipocComponent implements OnInit {
  @Input() equipo: IEquipo
  constructor() { }

  ngOnInit() {
  }

}
