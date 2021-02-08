import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseStakingComponent } from './mise-staking.component';

describe('MiseStakingComponent', () => {
  let component: MiseStakingComponent;
  let fixture: ComponentFixture<MiseStakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiseStakingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiseStakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
