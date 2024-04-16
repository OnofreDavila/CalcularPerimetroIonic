import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Triangulo } from '../modelo/figuraGeomtrica';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TrianguloComponent  implements OnInit {

  ladoAStr: string= "";
  ladoBStr: string="";
  ladoCStr: string="";
  resultado: string="";
  nombre:string="";

  constructor() { }

  calcularPerimetro(){
    const ladoA = parseInt(this.ladoAStr)
    const ladoB = parseInt(this.ladoBStr)
    const ladoC = parseInt(this.ladoCStr)
    const figuraTriangulo = new Triangulo(ladoA, ladoB, ladoC,"Triangulo")
    const perimetro = figuraTriangulo.calcularPerimetro()
    this.resultado = `El perimetro del Triangulo es ${perimetro} cm`


  }

  ngOnInit() {}

}
