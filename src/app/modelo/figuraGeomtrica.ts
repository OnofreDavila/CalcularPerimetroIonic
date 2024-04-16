// modelo de jerarquias

export abstract class FiguraGeometrica {
    nombre:string=""

    constructor(nombre:string){
        this.nombre = nombre
    }
    abstract calcularPerimetro():number
}

export class Circulo extends FiguraGeometrica {
    radio: number
    constructor(radio:number,nombre:string){
        super(nombre)
        this.radio = radio
    }  
    override calcularPerimetro(): number {
        return  parseFloat((Math.PI * 2 * this.radio).toFixed(2))
    }
}

export class Triangulo extends FiguraGeometrica {
    ladoA:number=0
    ladoB:number=0
    ladoC:number=0
    
    constructor(ladoA:number, ladoB:number, ladoC:number, nombre:string){
        super(nombre)
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC
    }

    override calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC
    }
}