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
    let x = simpsonRule.x(x0, x1, num_segment);
    let fx = simpsonRule.fx1(x);
    let result = simpsonRule.simpson(x, fx);
  }

  

  calcular(x0:number, x1:number, num_segmentos:number, opcion:number):number{
    if(opcion==1){
      let x = simpsonRule.x(x0, x1, num_segmentos);
      let fx = simpsonRule.fx1(x);
      let result = simpsonRule.simpson(x, fx);
      return result;
    }else if(opcion==2){
      let x = simpsonRule.x(x0, x1, num_segmentos);
      let fx = simpsonRule.fx2(x);
      let result = simpsonRule.simpson(x, fx);
      return result;
    }else if (opcion==3){      
      let x = simpsonRule.x(x0, x1, num_segmentos);
      let fx = simpsonRule.fx3(x);
      let result = simpsonRule.simpson(x, fx);
      return result;
    }
    else{
      return 0
    }
  }

  t(x0:number, x1:number, num_segmentos:number, dof:number):number{
    let x = simpsonRule.x(x0, x1, num_segmentos);
    let fx = simpsonRule.fx4(x,dof)
    return simpsonRule.simpson(x,fx)
  }

  gamma(x:number):number{
    let result = simpsonRule.gamma(x);
    return result
  }
}
