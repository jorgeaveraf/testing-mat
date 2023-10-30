import { Component } from '@angular/core';
import { simpsonRule } from '../common/simpson_rule';

let x0 = 0;
let x1 = 4;
let num_segment = 8;

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
  constructor() {
    let simpson = new simpsonRule();
    let x = simpson.x(x0, x1, num_segment);
    let fx = simpson.fx1(x);
    let result = simpson.simpson(x, fx);
  }
}
