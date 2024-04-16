import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, 
          IonList, IonItem, IonLabel, IonSelect, IonSelectOption, 
          SelectChangeEventDetail } from '@ionic/angular/standalone';

import {FormsModule} from '@angular/forms';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';

import { CirculoComponent } from "../circulo/circulo.component";
import { TrianguloComponent } from '../triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ TrianguloComponent, CommonModule, FormsModule, IonSelectOption, IonSelect, IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, CirculoComponent]
})
export class HomePage {
  tipofigura:string=""
  constructor() { }
  /**funciones para pasar el valor de seleccion en el select a la propiedad de home "tipofigura" */
  esTipoFiguraCirculo() {return this.tipofigura == "Circulo"}
  esTipoFiguraTriangulo() {return this.tipofigura == "Triangulo"}

  selecionFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.tipofigura = $event.detail.value
  }
}  
