import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationComponent } from './correlation.component';
import { CalculateComponent } from '../common/calculate';

describe('CorrelationComponent', () => {
    let calculateComponent: CalculateComponent;
    let Data_Test1: {
      proxy_size: number[];
      actual_added: number[];
    };
  
    let Data_Test2: {
      proxy_size: number[];
      actual_develop: number[];
    };
  
    let Data_Test3: {
      plan_added: number[];
      actual_added: number[];
    };
  
    let Data_Test4: {
      plan_added: number[];
      actual_develop: number[];
    };
  
    let x: number;
  
    beforeEach(() => {
      calculateComponent = new CalculateComponent();
  
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
    });
  
  //Test 1
  it('Should return r=0.9545 with the dataset Data_Test1',()=>{
    const expectedR=0.9545;
    const actualR=calculateComponent.rxy(Data_Test1.proxy_size,Data_Test1.actual_added);
    expect(actualR).toBeCloseTo(expectedR);
  });

  it('Should return r²=0.9111 with the dataset Data_Test1', ()=>{
    const expectedR2=0.9111;
    const actualR2=calculateComponent.rSquared(Data_Test1.proxy_size,Data_Test1.actual_added);
    expect(actualR2).toBeCloseTo(expectedR2);
  });

  //Test 2
  it('Should return r=0.9333 with the dataset Data_Test2',()=>{
    const expectedR=0.9333;
    const actualR=calculateComponent.rxy(Data_Test2.proxy_size,Data_Test2.actual_develop);
    expect(actualR).toBeCloseTo(expectedR);
  });

  it('Should return r²=0.8718 with the dataset Data_Test2', ()=>{
    const expectedR2=0.8718;
    const actualR2=calculateComponent.rSquared(Data_Test2.proxy_size,Data_Test2.actual_develop);
    expect(actualR2).toBeCloseTo(expectedR2);
  });

  //Test 3
  it('Should return r=0.9631 with the dataset Data_Test3',()=>{
    const expectedR=0.9631;
    const actualR=calculateComponent.rxy(Data_Test3.plan_added,Data_Test3.actual_added);
    expect(actualR).toBeCloseTo(expectedR);
  });

  it('Should return r²=0.9276 with the dataset Data_Test3', ()=>{
    const expectedR2=0.9276;
    const actualR2=calculateComponent.rSquared(Data_Test3.plan_added,Data_Test3.actual_added);
    expect(actualR2).toBeCloseTo(expectedR2);
  });

  //Test 4
  it('Should return r=0.9480 with the dataset Data_Test4',()=>{
    const expectedR=0.9480;
    const actualR=calculateComponent.rxy(Data_Test4.plan_added,Data_Test4.actual_develop);
    expect(actualR).toBeCloseTo(expectedR);
  });

  it('Should return r²=0.8983 with the dataset Data_Test4', ()=>{
    const expectedR2=0.8983;
    const actualR2=calculateComponent.rSquared(Data_Test4.plan_added,Data_Test4.actual_develop);
    expect(actualR2).toBeCloseTo(expectedR2);
  });
});

