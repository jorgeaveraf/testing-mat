import { Component } from '@angular/core';
import { CalculateComponent } from '../common/calculate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.css']
})
export class LinearRegressionComponent {

  Data_Test1 = {
    proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
  };

  Data_Test2 = {
    proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    actual_develop: [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2],
  };

  Data_Test3 = {
    plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
  };

  Data_Test4 = {
    plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    actual_develop: [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2],
  };
  x = 386;
  B1=0;
  B0=0;
  YK=0;
  R=0;
  R2=0;

  constructor(private router: Router) {}
  b1(data:number){
    let calculateComponent = new CalculateComponent();
    let Data1 = [];
    let Data2 = [];
    if(data==1){
      Data1 = this.Data_Test1.proxy_size;
      Data2 = this.Data_Test1.actual_added;
      this.B1 = calculateComponent.beta1(Data1, Data2);
      return this.B1;
  }
  if(data==2){
    Data1 = this.Data_Test2.proxy_size;
    Data2 = this.Data_Test2.actual_develop;
    this.B1 = calculateComponent.beta1(Data1, Data2);
    return this.B1;
  }
  if(data==3){
    Data1 = this.Data_Test3.plan_added;
    Data2 = this.Data_Test3.actual_added;
    this.B1 = calculateComponent.beta1(Data1, Data2);
    return this.B1;
  }
  if(data==4){
    Data1 = this.Data_Test4.plan_added;
    Data2 = this.Data_Test4.actual_develop;
    this.B1 = calculateComponent.beta1(Data1, Data2);
    return this.B1;
  }
  else{
  return 0;
  }
}

  b0(data:number){
    let calculateComponent = new CalculateComponent();
    let Data1 = [];
    let Data2 = [];
    if(data==1){
      Data1 = this.Data_Test1.proxy_size;
      Data2 = this.Data_Test1.actual_added;
      this.B0 = calculateComponent.beta0(Data1, Data2);
      return this.B0;
  }
  if(data==2){
    Data1 = this.Data_Test2.proxy_size;
    Data2 = this.Data_Test2.actual_develop;
    this.B0 = calculateComponent.beta0(Data1, Data2);
    return this.B0;
  }
  if(data==3){
    Data1 = this.Data_Test3.plan_added;
    Data2 = this.Data_Test3.actual_added;
    this.B0 = calculateComponent.beta0(Data1, Data2);
    return this.B0;
  }
  if(data==4){
    Data1 = this.Data_Test4.plan_added;
    Data2 = this.Data_Test4.actual_develop;
    this.B0 = calculateComponent.beta0(Data1, Data2);
    return this.B0;
  }
  else{
  return 0;
  }
}

yk(data:number){
  let calculateComponent = new CalculateComponent();
  let Data1 = [];
  let Data2 = [];
  if(data==1){
    Data1 = this.Data_Test1.proxy_size;
    Data2 = this.Data_Test1.actual_added;
    this.YK = calculateComponent.yk(Data1, Data2, this.x);
    return this.YK;
}
if(data==2){
  Data1 = this.Data_Test2.proxy_size;
  Data2 = this.Data_Test2.actual_develop;
  this.YK = calculateComponent.yk(Data1, Data2, this.x);
  return this.YK;
}
if(data==3){
  Data1 = this.Data_Test3.plan_added;
  Data2 = this.Data_Test3.actual_added;
  this.YK = calculateComponent.yk(Data1, Data2, this.x);
  return this.YK;
}
if(data==4){
  Data1 = this.Data_Test4.plan_added;
  Data2 = this.Data_Test4.actual_develop;
  this.YK = calculateComponent.yk(Data1, Data2, this.x);
  return this.YK;
}
else{
return 0;
}
}

r(data:number){
  let calculateComponent = new CalculateComponent();
  let Data1 = [];
  let Data2 = [];
  if(data==1){
    Data1 = this.Data_Test1.proxy_size;
    Data2 = this.Data_Test1.actual_added;
    this.R=calculateComponent.rxy(Data1, Data2);
    return this.R;
}
if(data==2){
  Data1 = this.Data_Test2.proxy_size;
  Data2 = this.Data_Test2.actual_develop;
  this.R=calculateComponent.rxy(Data1, Data2);
  return this.R;
}
if(data==3){
  Data1 = this.Data_Test3.plan_added;
  Data2 = this.Data_Test3.actual_added;
  this.R=calculateComponent.rxy(Data1, Data2);
  return this.R;
}
if(data==4){
  Data1 = this.Data_Test4.plan_added;
  Data2 = this.Data_Test4.actual_develop;
  this.R=calculateComponent.rxy(Data1, Data2);
  return this.R;
}
else{
return 0;
}
}

r2(data:number){
  let calculateComponent = new CalculateComponent();
  let Data1 = [];
  let Data2 = [];
  if(data==1){
    Data1 = this.Data_Test1.proxy_size;
    Data2 = this.Data_Test1.actual_added;
    this.R2=calculateComponent.rSquared(Data1, Data2);
    return this.R2;
}
if(data==2){
  Data1 = this.Data_Test2.proxy_size;
  Data2 = this.Data_Test2.actual_develop;
  this.R2=calculateComponent.rSquared(Data1, Data2);
  return this.R2;
}
if(data==3){
  Data1 = this.Data_Test3.plan_added;
  Data2 = this.Data_Test3.actual_added;
  this.R2=calculateComponent.rSquared(Data1, Data2);
  return this.R2;
}
if(data==4){
  Data1 = this.Data_Test4.plan_added;
  Data2 = this.Data_Test4.actual_develop;
  this.R2=calculateComponent.rSquared(Data1, Data2);
  return this.R2;
}
else{
return 0;
}
}


Op1(){
  this.b1(1);
  this.b0(1);
  this.yk(1);
  this.r(1);
  this.r2(1);
}

Op2(){
  this.b1(2);
  this.b0(2);
  this.yk(2);
  this.r(2);
  this.r2(2);
}

Op3(){
  this.b1(3);
  this.b0(3);
  this.yk(3);
  this.r(3);
  this.r2(3);
}

Op4(){
  this.b1(4);
  this.b0(4);
  this.yk(4);
  this.r(4);
  this.r2(4);
}

  home() {
    this.router.navigate(['']);
  }
}
