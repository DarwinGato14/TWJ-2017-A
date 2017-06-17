import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {EquipoComponent} from './equipo/equipo.component';
import {EquipocComponent} from './equipoc/equipoc.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    EquipocComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    //Http
  ],
  bootstrap: [EquipoComponent]
})
export class AppModule {
}
