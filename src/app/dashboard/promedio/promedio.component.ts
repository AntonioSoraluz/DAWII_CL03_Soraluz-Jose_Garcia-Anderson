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
  calcularPROM() {
    if (
      this.frmProm.nota1 === null ||
      this.frmProm.nota2 === null ||
      this.frmProm.nota3 === null ||
      this.frmProm.nota1 < 0 ||
      this.frmProm.nota1 > 20 ||
      this.frmProm.nota2 < 0 ||
      this.frmProm.nota2 > 20 ||
      this.frmProm.nota3 < 0 ||
      this.frmProm.nota3 > 20
    ) {
      this.resultado = "Debe ingresar las notas. La nota mínima es 0 y la nota máxima es 20.";
    } else {
      this.frmProm.prom = (Number(this.frmProm.nota1) + Number(this.frmProm.nota2) + Number(this.frmProm.nota3)) / 3;
      this.resultado = "Su Promedio es de " + this.frmProm.prom;
    }
  }
  
}
