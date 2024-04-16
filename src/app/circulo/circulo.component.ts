import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Circulo } from '../modelo/figuraGeomtrica';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CirculoComponent  implements OnInit {

  radioStr: string="";
  nombre: string = "circulo";
  resultado: string = "";

  constructor() { }

  calcularPerimetro() {
      const radio = parseInt(this.radioStr)
      const figuraCirculo = new Circulo(radio,"circulo")
      const perimetro = figuraCirculo.calcularPerimetro()
      this.resultado = `El perimetro es ${perimetro} cm`
    }

    ngOnInit() {}

}
