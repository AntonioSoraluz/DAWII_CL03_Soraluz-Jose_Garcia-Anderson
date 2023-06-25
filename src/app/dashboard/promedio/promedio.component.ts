import { Component } from '@angular/core';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.scss']
})
export class PromedioComponent {
  frmProm = {
    nota1: null,
    nota2: null,
    nota3: null,
    prom: 0,
  }
  resultado= "";
  calcularPROM(){
    this.frmProm.prom = (Number(this.frmProm.nota1)+Number(this.frmProm.nota2)+Number(this.frmProm.nota3)) / 3
    this.resultado = "Su Promedio es de "+ this.frmProm.prom;
  }
}
