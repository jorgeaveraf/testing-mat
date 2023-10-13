import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaComponent } from './media.component';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent]
    });
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should return mean=550.6 with the data', () => {
    const result = component.mean(component.arr);
    expect(result).toBe(550.6);
  });

  it('Should return mean=60.32 with the data', () => {
    const result = component.mean(component.arr2);
    expect(result).toBe(60.32);
  });
});
