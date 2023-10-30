import { ComponentFixture, TestBed } from '@angular/core/testing';
import { simpsonRule } from '../common/simpson_rule';

describe('SimpsonComponent', () => {
  let simpson: simpsonRule;

  beforeEach(() => {
    simpson = new simpsonRule();
  });

  it('Should return p=16.0 if x0=0, x1=4, num_seg=4, ERROR=0.0001 and f(x)=2x', () => {
    let x0 = 0;
    let x1 = 4;
    let num_segment = 4;
    let x = simpson.x(x0, x1, num_segment);
    let fx = simpson.fx1(x);
    let result = simpson.simpson(x, fx);
    expect(result).toBeCloseTo(16.0);
  });

  it('Should return p=0.3333 if x0=0, x1=1, num_seg=4, ERROR=0.0001 and f(x)=x^2', () => {
    let x0 = 0;
    let x1 = 1;
    let num_segment = 4;
    let x = simpson.x(x0, x1, num_segment);
    let fx = simpson.fx2(x);
    let result = simpson.simpson(x, fx);
    expect(result).toBeCloseTo(0.3333);
  });

  it('Should return p=1.38 if x0=1, x1=4, num_seg=6, ERROR=0.001 and f(x)=1/x', () => {
    let x0 = 1;
    let x1 = 4;
    let num_segment = 6;
    let x = simpson.x(x0, x1, num_segment);
    let fx = simpson.fx3(x);
    let result = simpson.simpson(x, fx);
    expect(result).toBeGreaterThan(1.379);
    expect(result).toBeLessThan(1.389);
  });
});
