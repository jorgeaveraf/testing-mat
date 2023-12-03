import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { RouterModule } from '@angular/router';


describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [RouterModule]
    });
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
