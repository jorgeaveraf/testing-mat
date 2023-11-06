import { ComponentFixture, TestBed } from '@angular/core/testing';
import { simpsonRule } from '../common/simpson_rule';
import { SimpsonComponent } from './simpson.component';

describe('SimpsonComponent', () => {
  let simpson: simpsonRule;
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      declarations: [SimpsonComponent],
      imports: []
    });
    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should return p=16.0 if x0=0, x1=4, num_seg=4, ERROR=0.0001 and f(x)=2x', () => {
    expect(component.calcular(0, 4, 4, 1)).toBeCloseTo(16.0);
  });

  it('Should return p=0.3333 if x0=0, x1=1, num_seg=4, ERROR=0.0001 and f(x)=x^2', () => {
    expect(component.calcular(0,1,4,2)).toBeCloseTo(0.3333);
  });

  it('Should return p=1.38 if x0=1, x1=4, num_seg=6, ERROR=0.001 and f(x)=1/x', () => {
    expect(component.calcular(1,4,6,3)).toBeGreaterThan(1.379);
    expect(component.calcular(1,4,6,3)).toBeLessThan(1.389);
  });

  it('Should return 16.0 if x=5', () => {
    expect(component.gamma(5)).toBeCloseTo(24.0);
  });

  it('Should return 11.63.0 if x=9/2', () => {
    expect(component.gamma(9/2)).toBeCloseTo(11.63);
  });

  it('Should return p=0.35006 if x0=0, x1=1.1, num_seg=10, ERROR=0.0001 and t', () => {
    expect(component.t(0,1.1,10,9)).toBeCloseTo(0.35006);
  });

  it('Should return p=0.36757 if x0=0, x1=1.1812, num_seg=10, ERROR=0.0001 and t', () => {
    expect(component.t(0,1.1812,10,10)).toBeCloseTo(0.36757);
  });

  it('Should return p=0.49500 if x0=0, x1=2.75, num_seg=10, ERROR=0.0001 and t', () => {
    expect(component.t(0,2.75,10,30)).toBeCloseTo(0.49500);
  });
});
