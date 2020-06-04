import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainRateComponent } from './rain-rate.component';

describe('RainRateComponent', () => {
  let component: RainRateComponent;
  let fixture: ComponentFixture<RainRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
