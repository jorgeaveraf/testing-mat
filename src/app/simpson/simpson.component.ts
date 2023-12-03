import { Component } from '@angular/core';
import { simpsonRule } from '../common/simpson_rule';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
  x0: number = 0;
  x1: number = 0;
  num_segm: number = 0;
  dof: number = 0;
  Re: number = 0;

  constructor(private router: Router) {}

  calcular(x0: number, x1: number, num_segmentos: number, opcion: number): number {
    let x = simpsonRule.x(x0, x1, num_segmentos);
    let fx;

    switch (opcion) {
      case 1:
        fx = simpsonRule.fx1(x);
        break;
      case 2:
        fx = simpsonRule.fx2(x);
        break;
      case 3:
        fx = simpsonRule.fx3(x);
        break;
      default:
        return 0;
    }

    let result = simpsonRule.simpson(x, fx);
    this.Re = result;
    return result;
  }

  t(x0: number, x1: number, num_segmentos: number, dof: number): number {
    let x = simpsonRule.x(x0, x1, num_segmentos);
    let fx = simpsonRule.fx4(x, dof);
    this.Re = simpsonRule.simpson(x, fx);
    return simpsonRule.simpson(x, fx);
  }

  gamma(x: number): number {
    return simpsonRule.gamma(x);
  }

  op1() {
    if (this.x1 === 0 || this.num_segm === 0) {
      // Manejar el caso de entradas no válidas
      console.error("Ingrese los valores para x0, x1 y el número de segmentos");
    } else {
      this.calcular(this.x0, this.x1, this.num_segm, 1);
    }
  }

  op2() {
    this.calcular(this.x0, this.x1, this.num_segm, 2);
  }

  op3() {
    this.calcular(this.x0, this.x1, this.num_segm, 3);
  }

  op4() {
    this.t(this.x0, this.x1, this.num_segm, this.dof);
  }

  home() {
    this.router.navigate(['']);
  }
}
