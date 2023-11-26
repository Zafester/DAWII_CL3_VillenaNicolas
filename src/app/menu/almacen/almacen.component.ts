import { Component } from '@angular/core';
import { almacen } from './almacen';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrl: './almacen.component.css'
})
export class AlmacenComponent {
  precioUnitario: number;
  cantidad: number;
  montoTotal: number;
  
  calcularMontoTotal() {
    if (this.cantidad > 20) {
      this.montoTotal = this.precioUnitario * this.cantidad * 0.9;
    } else if (this.cantidad > 10) {
      this.montoTotal = this.precioUnitario * this.cantidad * 0.95;
    } else {
      this.montoTotal = this.precioUnitario * this.cantidad;
    }
  }

}
