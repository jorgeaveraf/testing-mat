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
});
