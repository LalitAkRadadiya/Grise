import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidityEventComponent } from './liquidity-event.component';

describe('LiquidityEventComponent', () => {
  let component: LiquidityEventComponent;
  let fixture: ComponentFixture<LiquidityEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidityEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidityEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
